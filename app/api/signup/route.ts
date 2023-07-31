import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

import User from '@/modals/userModal';
import ConnectMongoDb from '@/lib/mongodb';

ConnectMongoDb();

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const requestBody = await request.json();
    const { name, email, password } = requestBody;

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { Error: 'User already exist' },
        { status: 400 }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    console.log(savedUser);
    return NextResponse.json(
      { Message: 'User created', savedUser },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
