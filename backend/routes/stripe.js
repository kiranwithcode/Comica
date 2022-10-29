const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY)

router.post("/payment", async(req, res) => {
  let status, error
 try {
  const charge = await stripe.charges.create({
    source: req.body.tokenId,
    amount: req.body.amount,
    currency: 'usd',
    })
    res.send(charge);
 } catch (error) {
        console.log(error);
        status = 'Failure';
 }
res.json({status, error})
})
        
    // (stripeErr, stripeRes) => {
    //   if (stripeErr) {
    //     res.status(500).json(stripeErr);
    //   } else {
    //     res.status(200).json(stripeRes);
    //   }
    // }
      // );
      // } catch (error) {
      //   console.log(error);
      //   status = 'Failure';
      // }


module.exports = router;


