// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == "POST") {
     
        for (let i = 0; i < req.body.length; i++) {

            let p = new Product({
                title: req.body[i].title,
                slug: req.body[i].slug,
                desc: req.body[i].desc,
                variants:req.body[i].variants.map((j)=>{return{color:j.color,colorcode:j.colorcode,img:j.img}}),
                category: req.body[i].category,
                subcategory: req.body[i].subcategory,
                height: req.body[i].height,
                width: req.body[i].width,
                price: req.body[i].price,
                img: req.body[i].poster,
                availableQty: req.body[i].availableQty,

                
            })
            await p.save()
        }
        res.status(200).json({ success: "success" })
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }

}
export default connectDb(handler);

