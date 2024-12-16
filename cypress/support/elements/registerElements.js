export default class RegisterElements {

    userNameInput(){
        return '[data-testid="nome"]'
    }
    
    emailInput(){
        return '[data-testid="email"]'
    }
    
    passwordInput(){
        return '[data-testid="password"]'
    }

    btnRegister(){
        return '[data-testid="cadastrar"]'
    }

    alertMessageError(){
        return '[role="alert"] span'
    }

    alertMessageSucsess(){
        return 'div > a'
    }

}