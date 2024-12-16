export default class LoginElements {
    emailInput() {
        return '[data-testid="email"]'
    }

    passwordInput() {
        return '[data-testid="senha"]'
    }

    loginButton() {
        return '[data-testid="entrar"]'
    }

    alertError() {
        return '[role="alert"] span'
    }

    btnRegister(){
        return '[data-testid="cadastrar"]'
    }
}