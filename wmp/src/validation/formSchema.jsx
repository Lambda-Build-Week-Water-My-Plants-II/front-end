import * as yup from 'yup'

const formSchema = yup.object().shape({
    username: yup.string()
    .trim()
    .min(5, 'Username must be at least five characters')
    .required('Username is required'),

    password:yup.string()
    .trim()
    .min(5, 'Password must be at least five characters')
    .required('Password is required'),

    phone_number: yup.string()
    .trim(),
        
})

export default formSchema