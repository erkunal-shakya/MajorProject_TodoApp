const express= require('express');
const app = express();
const port = 8000;
const path= require('path');
const mongoose= require('./config/db');
const TodoListSchema= require('./model/Todolistschema');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    TodoListSchema.find().then((data)=>{
        res.render('home',{
            title:"Major Project",
            listdata: data
        });
    }).catch((error) => {
        console.error(error); //
        return res.status(500).send('Internal Server Error');
     });
    
});

app.post('/submit',async (req,res)=>{
   try{
    const SubmitData = new TodoListSchema({
        description: req.body.desciption,
        category: req.body.category,
        duedate: req.body.date
    });

    const data = await SubmitData.save();
    return res.redirect('back');
   }catch (err) {
    console.log(err);
    return res.redirect('back');
  }
});

app.get('/delete-task',(req,res)=>{
const id =req.query.ids;
TodoListSchema.findByIdAndDelete(id).then(()=>{
    return res.redirect('back');
}).catch((error) => {
    console.error(error); //
    return res.status(500).send('Internal Server Error',error);
 });
});

app.listen(port,(err)=>{
    if(err){
        console.log(`server have some error: ${err}`);
    }
    console.log(`Server is Running at Port : ${port}`);
})