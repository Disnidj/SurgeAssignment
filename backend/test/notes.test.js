const mongoose = require('mongoose');
const notes = require("../models/notes");

test("create Notes without required filed should failed", async() =>{
   const adminWithoutRequiredField = new notes({ Title: "Title testing"});
    let err;
    try {
        const savedAdminWithoutRequiredField =
          await adminWithoutRequiredField.save();
        error = savedAdminWithoutRequiredField;
      } catch (error) {
        err = error;
      }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.Description).toBeDefined();
})
