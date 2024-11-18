
import express, { Request, Response } from 'express';
const app = express()
const port = 5000

// parsers
app.use(express.json());
app.use(express.text())


// Router
const userRouuter = express.Router();
app.use("/",userRouuter);
userRouuter.post("/api/v1/users/create-user",(req:Request,res:Response)=>{
    const user =req.body;
    console.log(user);
    res.json({
        success:true,
        message:"User is created successfully",
        data:user
    })
})
app.get("", (req:Request, res:Response) => {
    console.log(req.query.name)
//  console.log(req.params.userId,req.params.subId)
    res.send('Hello Duniya!')

})
app.post("/",(req:Request,res:Response)=>{
    
    // res.send("got data");
    res.json({
        message:"Successfully received data"
    })
})

export default  app;