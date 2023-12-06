const userModel = require("../model/user");

const addExecutive = async (req, res) => {

    const { phone } = req.body;

    try {
        
        const exitingUser = await userModel.findOne({phone : phone});

        if(exitingUser){
            return res.status(400).json({message: "Phone number already exist"})
        }

        const result = await userModel.create({
            name : "",
            phone : phone,
            otp : ""
        });

        res.status(201).json(result);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }

}

const generateOtp = async (req, res) => {

    // exitingUser
    // generate six digi code and save to database
    // user creation with six digit code

    const { name, phone } = req.body;

    try {
        
        const existingUser = await userModel.findOne({phone : phone});
        if(!existingUser){
            return res.status(400).json({message: "Permission Denied"});
        }

        let otp = Math.floor(100000 + Math.random() * 900000);

        const result = {
            name : name,
            phone : phone,
            otp : otp
        };

       
        await userModel.findOneAndUpdate({phone : phone},result);

        res.status(201).json({user: result});


    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

const verifyOtp = async (req, res) => {

    // existing user
    // otp match
    const { phone, otp } = req.body;

    try {
        
        const existingUser = await userModel.findOne({phone : phone});
        if(!existingUser){
            return res.status(400).json({message: "Permission Denied"});
        }

        if(existingUser.otp !== otp){
           return res.status(400).json({message: `Working OTP = exist = ${existingUser.otp} - otp = ${otp}`});
        }

        res.status(200).json({user: existingUser , message : "Sucessfully logged in"});

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }

}

module.exports = { addExecutive, generateOtp, verifyOtp };