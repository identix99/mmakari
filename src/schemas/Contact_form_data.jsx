import * as Yup from "yup";

let phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/ ;
let commemtRegExp = /^[a-zA-Z0-9\s,.'-]{3,}$/ ;
export const SignUpSchema = Yup.object({
    name: Yup.string()
    .max(40, "Must be 40 characters or less")
    .required("Please Enter Your Name"),
    email: Yup.string()
    .email("Email is invalid")
    .required("Please Enter Your Email")
    .max( 70, "Must be 70 characters or less"),
    drop: Yup.string()
    .required("please enter your drop value"),
    message: Yup.string()
    .matches(commemtRegExp, 'Comment is not valid')
    .max(5000, "Must be 90 characters or less")
    .required("Please Enter Your Comment"),
})