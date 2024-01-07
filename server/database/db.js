import mongoose from "mongoose";


export const Connection = async (username, password) => {
    
    const URL = `mongodb://${username}:${password}@ac-dtvngkq-shard-00-00.ks2fl48.mongodb.net:27017,ac-dtvngkq-shard-00-01.ks2fl48.mongodb.net:27017,ac-dtvngkq-shard-00-02.ks2fl48.mongodb.net:27017/?ssl=true&replicaSet=atlas-vpktpw-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database connected successfully');
    }catch(error){
        console.log('Error while connection with DB ', error.message);
    }
}

export default Connection;