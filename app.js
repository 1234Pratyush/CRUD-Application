const express = require('express');
const app = express();
const model = require('./models/usermodel');


app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/create',async(req,res)=>{
    try{
    let {name,email,age,gender,id,profession} = req.body;

    let userCreate = await model.create({
      name,
      email,
      age,
      gender,
      id,
      profession,
    });
    res.redirect('/user');
    }
    catch(err){
        res.send(err.message);
    }
   
})

app.get('/user',async(req,res) =>{
    let user = await model.find()
    res.render('user',{user})
})

app.get('/edit/:id',async(req,res)=>{

    let userEdit = await model.findById(req.params.id);
    res.render('edit',{userEdit});
});


app.post('/update/:id',async(req,res)=>{
    let {name,age,gender,profession,email} = req.body;
    let {id} = req.params

    let userUpdate = await model.findByIdAndUpdate(id,{
      name,
      age,
      gender,
      profession,
      email,
    });
    res.redirect('/user');

})

app.post('/delete/:id',async(req,res)=>{
    let userDelete = await model.findByIdAndDelete(req.params.id)
    res.redirect('/user');
})

app.listen('3000');