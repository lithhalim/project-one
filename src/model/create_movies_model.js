'use strict';
const {DataTypes}=require("sequelize")
const database=require("../database/database")
const COLLECTION= require("../myclasses/class_crud")

const favorateModel = database.define('createmovies', {
  name: { type: DataTypes.STRING, required: true },
  auther: { type: DataTypes.STRING, required: true },
  type: { type: DataTypes.STRING, required: true }
});

module.exports=new COLLECTION(favorateModel)

