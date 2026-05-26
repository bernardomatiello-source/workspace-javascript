class ValidateForm {
    constructor() {
        this.form = document.getElementById('form')
        this.events()
    }

    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const validFields = this.fieldsAreValid()
        const validPasswords = this.passwordsAreValid()

        if(validFields && validPasswords) {
            alert('Form Sended')
            this.form.submit()
        }
    }

    passwordsAreValid() {
        let valid = true

        const firstPass = document.getElementById('firstPassword')
        const secondPass = document.getElementById('secondPassword')

        if(firstPass.value.length < 6 || firstPass.value.length > 12) {
            this.createError(firstPass, 'It must contain between 3 and 12 characters')
            valid = false
        }

        if(firstPass.value !== secondPass.value) {
            this.createError(secondPass, 'Password differ')
            valid = false
        }

        return valid
    }

    fieldsAreValid() {
        let valid = true

        for (const spanErrorText of this.form.querySelectorAll('.error-text')) {
            spanErrorText.remove()
        }

        for (const field of this.form.querySelectorAll('.beValidate')) {

            const labelText = field.previousElementSibling.innerText

            if (!field.value) {
                this.createError(field, `${labelText} cannot be empty`)
            }

            if(field.id === 'cpf') {
                if(!this.validCpf(field)) valid = false
            }

            if(field.id === 'user') {
                if(!this.validUser(field)) valid = false
            }

        }

        return valid
    }

    validUser(field) {
        const user = field.value

        let valid = true
        if(user.length < 3 || user.length > 12) {
            this.createError(field, 'It must contain between 3 and 12 characters.')
            valid = false
        }

        if(!user.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(field, 'It must have only numbers and/or letters.')
            valid = false
        }
        

        return valid
    }

    validCpf(field) {
        const validateCpf = new ValidateCpf(field.value)
        
        let valid = true
        if (!validateCpf.validate()) {
            this.createError(field, `Type a valid CPF`)
            valid = false
        }

        return valid
    }

    createError(field, message) {
        const div = document.createElement('div')
        div.innerText = message
        div.classList.add('error-text')

        field.insertAdjacentElement('afterend', div)
    }

}

const validate = new ValidateForm()