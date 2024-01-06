import * as Yup from 'yup'

export const registerValidation=Yup.object({
    name:Yup.string().min(2).max(25).required("Please enter name"),
    email:Yup.string().email().required("Please enter email"),
    password:Yup.string().min(6).required("Please enter password"),
    cpassword:Yup.string().required().oneOf([Yup.ref('password'),null,'password must be match'])
})