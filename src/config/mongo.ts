import { connect, ConnectOptions } from 'mongoose';

const dbConnectiion = async () => {
    const DB_URI = process.env.DB_URI || '';
    const DB_USER = process.env.DB_USER || '';
    const DB_PASSWORD = process.env.DB_PASSWORD || '';
    const DB_NAME = process.env.DB_NAME || '';

    const config: ConnectOptions = {
        dbName: DB_NAME,
        user: DB_USER,
        pass: DB_PASSWORD,
    }
    try {
        await connect(DB_URI, config);
        console.log('Connection to database mongo success');
    }catch(error){
        console.log('Error to connect database -->', error);
    }
    
}

export default dbConnectiion;