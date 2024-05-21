import mongoose from "mongoose";
import app from "./app"
import confiqe from "./app/confiqe"



const main = async()=>{
   try {
    await mongoose.connect(confiqe.database_URL as string);
    app.listen(confiqe.port, () => {
        console.log(`Example app listening on port ${confiqe.port}`)
    })
   } catch (error) {
    console.log(error)
   }
}

main()