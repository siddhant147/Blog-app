import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://siddhant:siddhant@ac-ezrfi8s-shard-00-00.yx7xp7d.mongodb.net:27017,ac-ezrfi8s-shard-00-01.yx7xp7d.mongodb.net:27017,ac-ezrfi8s-shard-00-02.yx7xp7d.mongodb.net:27017/?ssl=true&replicaSet=atlas-bonphb-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blogApp`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;