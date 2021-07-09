//como capturar elementos do nosso html
const listContainer = document.querySelector("[data-list]")
const newListform = document.querySelector("[data-new-list-form]")
const newListinput = document.querySelector("[data-new-list-input]")

let lists = [] //começa vazia

//fazer que o botão funcione + realize o evento(interações do usuario na pagina) do botão
//toda vez que o navegador recebe 'submit' a pagina é atualizada 

newListform.addEventListener('submit', function(e){
    //preciso parar esse evento de atualizar a pag a cada vez que for inserido um dado
    e.preventDefault()

    //capturar os valores que foram digitas no input para guardar
    const listName = newListinput.value

    //se o input estivel vazio ou null não quero que siga
    if(listName === null || listName === '') return

    //chamar o compular 'const' e criar função da nossa lista
     list = createList(listName)

    //toda vez que eu compular o meu input, quero limpar
    newListinput.value = null

    //pego a lista e uso o push para incluir no final da lista/array
    lists.push(list)

    //chamo uma função para mostrar os itens na tela
    render();
})

function createList(name) { //sempre tem que entrar no final da lista
    //maneira dinamica
    //id:pega o horario atual e transforma em string atraves de metodos nativos do js
    return{id:Date.now().toString(), name: name}
}

function render() {
    //chama a função de limpar
    clearElement(listContainer)

    //1percorrer a lista de itens
    //usa o forEach não precisa passar aquelas três verificações
    //que era contador, inicializar o contador, e uma verificação
    //enquanto for verdade faz isso; ou seja percorre nossa lista

    lists.forEach(function(list){
        //criar a lista e jogar pro html 
        const item = document.createElement('li')

        //add um class ao meu elemento html a nossa lista de classe
        item.classList.add('item')

        //recuperar esse item ou seja qual conteudo vai receber
        item.innerText = list.name

        //eu qual elemento do html ele vai ficar
        //pego a elemento mãe(div fantasma) que vai receber o filho 
        //usa a função .appendChild (nome da variavel)
        listContainer.appendChild(item)
    })
}
    //apagar o nosso elemento, pois a partir do 2item digitado ele esta repetindo 
    function clearElement(element){
        //chama o while(laço de repetição): onde se for o 1 elemento da list  
        //eu quero que ele remova o primeiro elemento 
        while(element.firstChild){
            //chama funçao nativa do js de remoção, tirando nosso primeiro elemento
            element.removeChild(element.firstChild)
        }
}

render()