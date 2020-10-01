
export default class Utility {

    static isValidField = (trim) =>{
        let length = trim.trim().length
        return length > 0 ? true:false
    }

    static isEmailValid = (trim) => {

        const expression = ""
        let isValid = expression.test(String(trim).toLocaleLowerCase())
        return
    }
}