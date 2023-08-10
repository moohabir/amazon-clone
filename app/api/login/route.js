import { NextRequest, NextResponse } from 'next/server';
import User from '@/modals/userModal';

import jwt from 'jsonwebtoken';
import bcrypts from 'bcryptjs';
import ConnectMongoDb from '@/lib/mongodb';

ConnectMongoDb();

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const { email, password } = requestBody;
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ Error: 'User not Exist' }, { status: 400 });
    }

    const validPassword = await bcrypts.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { Error: 'Incorrect Password' },
        { status: 400 }
      );
    }

    const usertokenData = {
      id: user._id,
      name: user.name,
      email: user.email,
    };

    const token = await jwt.sign(usertokenData, process.env.SECRET_TOKEN, {
      expiresIn: '1d',
    });
    const response = NextResponse.json(
      { isLoggedin: true, usertokenData },
      { Message: 'Login Successful' }
    );
    response.cookies.set('token', token, { httpOnly: true });

    //response.cookies.get('token');
    return response;
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ Error: error.message }, { status: 500 });
  }
}
