'use strict';
const {DataTypes}=require("sequelize")
const database=require("../database/database")
const COLLECTION= require("../myclasses/class_crud")

const favorateModel = database.define('myfavoret', {
  name: { type: DataTypes.STRING, required: true },
  rate: { type: DataTypes.STRING, required: true },
  comment: { type: DataTypes.STRING, required: true }
});

module.exports=new COLLECTION(favorateModel)


