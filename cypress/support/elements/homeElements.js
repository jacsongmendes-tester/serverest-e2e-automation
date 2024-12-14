export default class HomeElements {
    btnLogout() {
        return '[data-testid="logout"]'
    }
    
    productLink (){
        return '[data-testid="product-detail-link"]'
    }

    productTitle (){
        return 'div> section> div> div>  h5'
    }

    inputSearch(){
        return '[data-testid="pesquisar"]'
    }

    btnSearch(){
        return '[data-testid="botaoPesquisar"]'
    }

    btnAddList(){
        return '[data-testid="adicionarNaLista"]'
    }
}