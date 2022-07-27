const mongoose = require("mongoose");
const User = require("../models/user");

test("create User without required filed should failed", async() =>{
    const adminWithoutRequiredField = new User({Name : "Name testing", Password :"testing@my.sliit.lk"});
    let err;
    try{
        const saveAdminWithoutRequiredField =
        await adminWithoutRequiredField.save();
        error = savedAdminWithoutRequiredField;
    } catch(error){
        err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.Email).toBeDefined();
})