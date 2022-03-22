import mongoose from 'mongoose';
const Connection = async ()=>{
    const URL = 'mongodb+srv://codeWithShubham:shubhamkinidhi130617@ecommerceweb.spevi.mongodb.net/PROJECT?retryWrites=true&w=majority';
    try {
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log("Connected to Database Successfully");
    } catch (error) {
        console.log("Error while connecting the database",error.message);
    }
};
export {Connection};