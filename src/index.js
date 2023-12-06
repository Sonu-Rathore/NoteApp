require("dotenv").config();

const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const workRouter = require("./routes/workRoutes");
const mongoose = require("mongoose");

app.use(express.json());

app.use("/users",userRouter);
app.use("/work",workRouter);

app.get("/", (req,res) => {
    res.send("Working!!")
});

mongoose.connect("mongodb+srv://admin:admin@cluster0.2p8e2ud.mongodb.net/note_db?retryWrites=true&w=majority")
.then( ()=>{
    app.listen(5000, () => {
        console.log("Server started on Port no. 5000");
    });
})
.catch( ()=>{
    console.log(error);
})