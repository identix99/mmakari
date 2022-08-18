import * as Yup from "yup";

export const SignUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("please enter your name"),
    email: Yup.string().email().required("please enter your email"),
    drop: Yup.string().required("please enter your drop value"),
    message: Yup.string().min(1).max(1000).required("please enter message"),
})