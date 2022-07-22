// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/webstore',{
//     useNewUrlParser:true

// }).then(()=>{
//     console.log('db connected');

// }).catch((e)=>{
//     console.log('db connection failed');
// })

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://root:admin@cluster0.uuxlwxh.mongodb.net/hexashop?retryWrites=true&w=majority',{

    useNewUrlParser:true

}).then((data)=>{
    console.log('mongodb atlas connected');
    return data
}).catch((e)=>{
    console.log(e+"mongodb atlas connection failed");
})
