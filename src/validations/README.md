# Getting Started with Create React App
# import package like this
import {validator} from "react-form-field-validation";

# After Installing the package add this function inside your form submit function 

const validate= validator();

##  add an object to the  validator function like this.

const validate= validator([
      { fieldname: "email", value: UserEmail, rule: ["valid-email", "mandatory"] },
      {
        fieldname: "password",
        value: UserPassword,
        rule: ["min-6", "mandatory","max-10"],
      },
    ]);

### fieldname: which field you need to validate
### value: value of that particular field (state variable)
### rule: rules need to be added to this key

### rule list: 
    ["min-6"]-> field should have atleast 6 characters
    ["max-10"]-> field can only have maximum of 10 characters
    ["mandatory"]-> field is a mandatory field
    ["valid-email"]-> This will check whether the user has given a valid email.
    ["valid-name"]-> This will check whether the user has given a valid name.
    ["match-passwords"]-> This will check whether passwords are matching.

    Note --> If you are using ["match-passwords"] rule you must give an id as "password" and "confirm-password" to the fields password and confirm password respectively.

### You can add rules together like ["min-2","max-8","match-password"]

### once form submit button is clicked the errors will be shown and errors will be updated on the next submit