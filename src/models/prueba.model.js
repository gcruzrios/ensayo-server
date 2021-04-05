const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmpleadoSchema = Schema (
{
    nombre: String,
    apellido: String,
    salario:String
});

module.exports = mongoose.model("Empleado", EmpleadoSchema);