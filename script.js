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

// On introduit dynamiquement les parametre avec la fonction
// On instancie la classe book avec ces parametres
// on push les valeurs dans le tableau d'objet myLibrary
function addBook (title, author, pages ,read)
{
    let book = new Book(title, author, pages, read)
    myLibrary.push(book)
    displayBooks()
}



function deleteBook ()
{
    document.getElementById('book-list').addEventListener('click', (e) => {

        deleteTarget(e.target)

        e.preventDefault()
    })
}


function deleteTarget(target) {
    if (target.className === 'delete') {
        // target.parentElement.parentElement.remove()
        myLibrary.splice(target, 1)
    }
}
deleteBook()




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


// Prend les valeurs du formulaire et les transforme en objet
function inputBook () {
    
    document.getElementById("add-book").addEventListener('click', (e) => {

        // On récupere les valeurs du formulaire
        let titleForm = document.getElementById("title").value 
        let authorForm = document.getElementById("author").value
        let pagesForm = document.getElementById("pages").value
        let readForm = document.getElementById("read").value

        // on creer un message d'erreur si un des champs n'est pas rempli
        if ((titleForm == "") || (authorForm == "") || (pagesForm == "") || (readForm == "")) {
            alert('Remplissez tous les champs')
        }

        // On renvoi les valeurs en paramètre pour créer le nouvel objet
        addBook(titleForm, authorForm, pagesForm, readForm)
        // console.log(myLibrary)

        // On clear le formulaire
        document.getElementById('book-form').reset()
        
        e.preventDefault()
    })
    
}
inputBook()

// console.log(myLibrary)
displayBooks()

