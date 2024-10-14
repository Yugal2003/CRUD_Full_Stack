const userModel = require('../model/user');

const createUser = async(req,res) =>{
    try {
        const userData = req.body;
        const newUser = userModel(userData);
        const newlyUser = await newUser.save();

        res.json({
            success : true,
            message : "User Create SuccessFully !"
        })
    } 
    catch (error) {
        res.status(404).json({
            success : false,
            message : "Error While Create User !"
        })
    }
}

const fetchAllUser = async(req,res) =>{
    try {
        const {minSalary,maxSalary} = req.query;
        const jobList = await userModel.find({
            $and : [
                {salary : {$lte : maxSalary}},
                {salary : {$gte : minSalary}}
            ]
        })
        res.json({
            success : true,
            message : "User List Success !",
            User_Length : jobList.length,
            UserList : jobList
        })
    } 
    catch (error) {
        res.status(404).json({
            success : false,
            message : "Error While User List !"
        })
    }
}

const fetchSingleUser = async(req,res) =>{
    try {
        const userId = req.params.id;
        const user =  await userModel.findById(userId)
        if (user) {
            res.json({
                success: true,
                message: "User Found Successfully!",
                UserData: user 
            });
        } else {
            res.status(404).json({
                success: false,
                message: "User not found!"
            });
        }
    } 
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error While Finding User!",
            error: error.message 
        });
    }
}

const updateUser = async(req,res) =>{
    try {
        const userId = req.params.id;
        await userModel.findByIdAndUpdate(userId,req.body);
        res.json({
            success : true,
            message : "Edit User Successfully !"
        }) 
    } 
    catch (error) {
        res.status(404).json({
            success : false,
            message : "Error in User Edit !"
        })
    }
}


const deleteUser = async(req,res) =>{
    try {
        const userId = req.params.id;
        await userModel.findByIdAndDelete(userId);
        res.json({
            success : true,
            message : "User Delete Successfully !"
        })
    } 
    catch (error) {
        res.status(404).json({
            success : false,
            message : "Error While User Delete !"
        })
    }
}


const userController = {createUser,fetchAllUser,fetchSingleUser,updateUser,deleteUser}

module.exports = userController;