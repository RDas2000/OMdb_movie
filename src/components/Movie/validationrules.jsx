import * as Yup from 'yup';


const validationrules=Yup.object().shape({
    email:Yup.string()
    .required("Email is required")
    .email("Email is invalid")
    .lowercase()
    .strict(),

    password: Yup.string()
    .required('No password provided.').strict() 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[A-Z]+/gi, 'Password should be strong like Zqgh@12.')
})
export default validationrules;