let biblioteca = [];
let inputTitulo = document.getElementById("cadTitulo");
let inputAutor = document.getElementById("cadAutor");
let inputGenero = document.getElementById("cadGenero");
let inputEditora = document.getElementById("cadEditora");
let inputIsbn = document.getElementById("cadIsbn");
let acervo = document.getElementById("acervo");

function add() {
    let livro = {
        titulo: inputTitulo.value,
        autor: inputAutor.value,
        genero: inputGenero.value,
        editora: inputEditora.value,
        isbn: inputIsbn.value
    }

    if (existe(livro.isbn) == false) {
        biblioteca.push(livro);
    } else {
        alert("Livro ja cadastrado")
    }

    inputTitulo.value = null;
    inputAutor.value = null;
    inputGenero.value = null;
    inputEditora.value = null;
    inputIsbn.value = null;

    listagem();
}

function listagem() {
    let livros = ""

    for(let li of biblioteca){ 
        livros += "Titulo: " + li.titulo + "<br>" + "Autor: " + li.autor + "<br>" + "Genero: " + li.genero + "<br>" + "Editora: " + li.editora + "<br>" + "ISBN: " + li.isbn +"<hr>"
    }   
    

    acervo.innerHTML = livros;
}



function existe(isbn) {
    for (let livro of biblioteca) {
        if (livro.isbn == isbn) {
            return true
        }
    }
    return false
}

