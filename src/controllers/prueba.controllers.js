const PruebaCtrl={}
const Empleado = require ('../models/prueba.model');

PruebaCtrl.obtener=(req,res)=>{
    res.send('Funcionando desde get');
}

PruebaCtrl.crear= async (req,res)=>{
    //res.send('Funcionando desde post');
    const { nombre,apellido, salario} =req.body
    const NuevoRegistro= new Empleado({
        nombre,
        apellido,
        salario
    })
    await NuevoRegistro.save()
    res.json({
        mensaje:'Empleado Guardado'
    })

}

PruebaCtrl.actualizar=(req,res)=>{
    res.send('Funcionando desde put');
}

PruebaCtrl.eliminar=(req,res)=>{
    res.send('Funcionando desde delete');
}
module.exports=PruebaCtrl