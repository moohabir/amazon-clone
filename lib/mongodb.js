import mongoose from 'mongoose';
const ConnectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONOGO_URI);
    console.log('Mongo Database Connected');
  } catch (error) {
    console.log(error.messaage);
  }
};
export default ConnectMongoDb;
