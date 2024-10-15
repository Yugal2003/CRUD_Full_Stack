const userModel = require('../model/user');

const createUser = async(req,res) =>{
    try {
        const userData = req.body;
        const newUser = userModel(userData);
        const newlyUser = await newUser.save();

        res.json({
            success : true,
            message : "User Create SuccessFully !",
            UserId : userData.userId
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
    // try {
    //     const {minSalary,maxSalary} = req.query;
    //     if(minSalary && maxSalary){
    //         const jobList = await userModel.find({
    //             $and : [
    //                 {salary : {$lte : maxSalary}},
    //                 {salary : {$gte : minSalary}}
    //             ]
    //         })
    //         res.json({
    //             success : true,
    //             message : "User List Success !",
    //             User_Length : jobList.length,
    //             UserList : jobList
    //         })
    //     }
    //     else{
    //         res.json({
    //             success : false,
    //             message : "Error While Find UserList !",
    //         })
    //     }
    // } 
    // catch (error) {
    //     res.status(404).json({
    //         success : false,
    //         message : "Error While User List !"
    //     })
    // }

    try {
        const jobList = await userModel.find({}); 
        res.json({
          success: true,
          message: "User List Success!",
          User_Length: jobList.length,
          UserList: jobList
        });
      } catch (error) {
        res.status(404).json({
          success: false,
          message: "Error while fetching user list!"
        });
      }
}

const fetchSingleUser = async(req,res) =>{
    try {
        const userId = req.params.userId;
        const user =  await userModel.findOne({userId})
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
        });
    }
}

const updateUser = async(req, res) => {
    try {
        const { userId } = req.params;

        const user = await userModel.findOneAndUpdate({ userId: userId }, req.body, { new: true });

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.json({ success: true, message: 'User updated successfully', user });
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error in User Edit!'
        });
    }
};



const deleteUser = async(req,res) =>{
    try {
        const {userId} = req.params;

        const user = await userModel.findOneAndDelete({ userId: userId });

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.json({ success: true, message: 'User Deleted successfully', user });
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