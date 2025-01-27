import * as yup from "yup";

export const Signupschema = yup.object({
    email: yup.string().email().required("Please enter a valid email"),
    password: yup.string().required("enter a valid password provided by admin"),
    confirmpassword: yup.string().oneOf([yup.ref("passsword")], null).required("password must match"),
})