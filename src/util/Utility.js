
export default class Utility {

    static isValidPasswordField = (trim) =>{
        let length = trim.trim().length
        return length > 0 ? true:false
    }

    static isEmailValidField = (trim) => {
        const expression = "/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
        let isValid = expression.test(String(trim).toLocaleLowerCase())
        return
    }
}