const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title : {type: String, required: true},
    slug : {type: String, required: true, unique:true},
    desc : {type: String,required:true},
    category : {type: String,required:true},
    subcategory : {type: String},
    poster:{type:String,required:true},
    height : {type:Array,required:true},
    width : {type:Array,required:true},
    variants : [{color:{type:String,required:true},colorcode:{type:String,required:true},img:{type:String,required:true}}],
    price : {type: Number, required:true},
    availableQty : {type: Number, required:true},
},{timestamps:true});
mongoose.models={}

export default mongoose.model("Product",ProductSchema);