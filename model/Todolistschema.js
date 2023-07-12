const mongoose= require('mongoose');

const Schema= new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    duedate: {
        type: Date,
        required: true
    }
});

const TodoList= mongoose.model('ListData',Schema);

module.exports= TodoList;