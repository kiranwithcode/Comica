const express = require("express")
const mongoose = require("mongoose")
const app = express()
const dotenv = require("dotenv")
const userRouter = require("./routes/user")
const authRouter = require("./routes/auth")
const productRouter = require("./routes/product")
const cartRouter = require("./routes/cart")
const orderRouter = require("./routes/order")
const stripeRoute = require("./routes/stripe")
const cors = require("cors")




dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(() =>{
    console.log("DB connection successfull!");
})
.catch((err) =>{
    console.log(err);
})

app.use(cors())
app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/products", productRouter)
app.use("/api/carts", cartRouter)
app.use("/api/orders", orderRouter)
app.use("/api/checkout", stripeRoute);
 
app.listen( process.env.PORT || 5000, () =>{
    console.log("Backend server is running ");
})