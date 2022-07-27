const mongoose = require('mongoose');
const areas = require("../models/notes");

test("create areas without required filed should failed", async() =>{
   const adminWithoutRequiredField = new notees({ Title: "Area testing"});
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
