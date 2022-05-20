// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"
 
const handler = async (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let products = await Product.distinct("category")
 
 
    res.status(200).json( products )
}
export default connectDb(handler);
  
  