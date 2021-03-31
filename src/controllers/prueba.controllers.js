const PruebaCtrl={}

PruebaCtrl.obtener=(req,res)=>{
    res.send('Funcionando desde get');
}

PruebaCtrl.crear=(req,res)=>{
    res.send('Funcionando desde post');
}

PruebaCtrl.actualizar=(req,res)=>{
    res.send('Funcionando desde put');
}

PruebaCtrl.eliminar=(req,res)=>{
    res.send('Funcionando desde delete');
}
module.exports=PruebaCtrl