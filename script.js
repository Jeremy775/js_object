// Mon objet
let myLibrary = [
    {
        title: 'One Piece',
        author: 'Eichiro Oda',
        pages: '12',
        read:'lu',
    }
];


// Constructeur de l'objet book
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBook (title, author, pages ,read)
{
    let book = new Book(title, author, pages, read)
    myLibrary.push(book)
    displayBooks()
}


// Intègre les propriété de l'objet dans le html
function displayBooks () {

    let table = document.getElementById('book-list');

    // Supprime les anciens elements avant de tout réafficher dans la boucle
    const rmv = document.querySelectorAll("#book-list tr")
    for (let i = 0; i < rmv.length; i++) {
        rmv[i].remove()
    }

    // Boucle dans la table myLibrary et affiche les elements
    myLibrary.forEach(myLibrary => {
        let tr = document.createElement('tr');
        for (let key in myLibrary) { 
        let td = document.createElement('td');
        td.innerHTML= myLibrary[key];
        tr.appendChild(td);
        };
        tr.innerHTML += `<td><a href="#" class="delete">X</a></td>`
        table.appendChild(tr);
    });
}

function inputBook () {
    
    document.getElementById("add-book").addEventListener('click', (e) => {

        let titleForm = document.getElementById("title").value 
        let authorForm = document.getElementById("author").value
        let pagesForm = document.getElementById("pages").value
        let readForm = document.getElementById("read").value

        if ((titleForm == "") || (authorForm == "") || (pagesForm == "") || (readForm == "")) {
            alert('Remplissez tous les champs')
        }

        addBook(titleForm, authorForm, pagesForm, readForm)
        // console.log(myLibrary)
        document.getElementById('book-form').reset()
        e.preventDefault()
    })
    
}
inputBook()

// console.log(myLibrary)
displayBooks()

