const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports.register = (req, res, next) => {
    // var user = new User();
    // user.userName = req.body.userName;
    // user.email = req.body.email;
    // user.password = req.body.password;
    // user.confirmPassword = req.body.confirmPassword;
    // user.save((err, doc) => {
    //     if (!err) {
    //         res.send(doc);
    //     } else {
    //         if (err.code = 11000) {
    //             res.status(422).send(['Duplicate email address found!']);
    //         } else {
    //             return next(err);
    //         }
    //     }
    // });

    const { userName, email, password, confirmPassword } = req.body;
    // Check if user not enter enough field as required
    if (userName === "" || email === "" || password === "") {
        return res
            .status(403)
            .send({ success: false, message: "Field cannot be empty" });
    }


    // check if there is already a valid user!
    try {
        let newUser = new User({
            userName,
            email,
            password,
            confirmPassword,
        });
        newUser.save();
        res.status(200).json({ success: true, message: "Sign in successfully" });

        User.findOne({ userName, email, password, confirmPassword })
        if (user) {
            return res
                .status(404)
                .send({ success: false, message: "User already exists" });
        }




    } catch (error) {
        console.log(error);
    }
};

module.exports.login = (req, res, next) => {
    const { userName, password } = req.body;
    //find the user by username and password
    User.findOne({ userName, password })
        .then((user) => {
            res.send(user);
        })
        .catch((error) => {
            console.error(error);
        });
};