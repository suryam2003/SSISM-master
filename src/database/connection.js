const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://SuyamYadav:123@cluster0.ih7wq.mongodb.net/demo1?retryWrites=true&w=majority"
,{
      // useCreateIndex:true,
    // useNewUrlparser:true,
    // useUnifiedTopology:true
}).then(()=>{
    console.log("connection Successfull....");
}).catch((err)=>{
    console.log("no connection. ?" + err);
})