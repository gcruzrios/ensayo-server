const mongoose=require('mongoose');

URI=('mongodb://localhost/ensayo');

mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then (db=>console.log('base de datos conectado'))
  .catch(error=>console.log(error))

  module.exports=mongoose