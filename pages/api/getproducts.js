// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"
 
const handler = async (req,res)=>{
var idea = [];
    let products = await Product.distinct("category")
    for(let i=0;i<products.length;i++){
        let sub = await Product.findOne({category:products[i]})
        idea.push(sub.sub)
       
    }
    console.log(idea)
    res.status(200).json( {products ,idea})
}
export default connectDb(handler);
  
  