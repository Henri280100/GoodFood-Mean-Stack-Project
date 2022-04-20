const mongoose = require("mongoose");
const Employee = mongoose.model("Employee");

// Create a new employee
module.exports.createEmployee = (req, res) => {
    const { username, email, password, role } = req.body;
    if (username === "" || email === "" || password === "" || role === "") {
        return res
            .status(403)
            .send({ success: false, message: "Field cannot be empty" });
    }

    try {
        let newEmployee = new Employee({
            username,
            email,
            password,
            role,
        });
        newEmployee.save();
        res
            .status(200)
            .json({ success: true, message: "Employee saved successfully" });
    } catch (e) {
        console.error(e);
    }
};

// list all the employees
module.exports.findEmployees = (req, res) => {
    Employee.find((err, emp) => {
        if (!err) {
            return res.status(200).json({ emp });
        } else {
            return res.status(404).json({ success: false, message: 'Invalid Employee' });
        }
    })
}