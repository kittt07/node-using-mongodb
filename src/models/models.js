import mongoose from "mongoose";

const Schema = mongoose.Schema;

const products = new Schema({
   name: {
       type: String,
       required: true
   },
   description: {
       type: String,
       required: true
   },
   category: {
       type: String
   },
   price: {
       type: Number
    },
    created_date: {
        type: Date,
        default: Date.No
    }
});