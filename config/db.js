const mongoose= require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/Major_ToDo_List',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
});

const db = mongoose.connection;

db.on('error',(err)=>{
    console.log(`Error while Connecting with Mongoose: ${err} `);
});

db.on('open',()=>{
    console.log(`MongoDB conncetion open`);
});

db.on('connected',()=>{
    console.log(`Successfully Connected to DB`);
});

db.on('disconnected', function() {
    console.log('MongoDB disconnected!');
  });