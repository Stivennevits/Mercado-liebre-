const { sequelize } = require(".");

module.exports = (sequelize, dataTypes) => {
    let alias = "Productos";
    let cols = {
        id_product:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        } ,
        nombre_producto:{
            type: dataTypes.INTEGER
        } ,
        precio:{
            type: dataTypes.INTEGER
        } ,
        descuento:{
            type: dataTypes.INTEGER
        } , 
        id_usuario:{
            type: dataTypes.INTEGER,
            foreignKey: true
        } 
    };
    let config = {
        tableName: "products", // nombre de la tabla 
        timestamp: false // para creat edad, para hacer seguimiento de los cambios, solo se usa true si la tabla lo tiene
    }  
    
    const Product = sequelize.define(alias, cols, config)

    return Product
}