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


// Prend les valeurs du formulaire et les transforme en objet
function storeBook () {
    
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

        // On clear le formulaire
        document.getElementById('book-form').reset()

        e.preventDefault()
    })
    
}
storeBook()

// On intègre les livres dans le HTML
function displayBooks() {
    const display = document.getElementById('books');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));
   
    for (let i=0; i<myLibrary.length; i++){
        createBook(myLibrary[i]);
    }
}

// On créer les elements du DOM, a utiliser dans displayBooks();
function createBook(item) {
    const library = document.querySelector('#books');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button');
    
    
    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(item));

    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authDiv.textContent = item.author;
    authDiv.classList.add('author');
    bookDiv.appendChild(authDiv);

    pageDiv.textContent = item.pages;
    pageDiv.classList.add('pages');
    bookDiv.appendChild(pageDiv);

    readBtn.classList.add('readBtn')    
    bookDiv.appendChild(readBtn);
    if(item.read===false) {
        readBtn.textContent = 'Not Read';
        readBtn.style.backgroundColor = '#e04f63';
    }else {
        readBtn.textContent = 'Read';
        readBtn.style.backgroundColor = '#63da63'
    }

    removeBtn.textContent = 'Remove'; 
    removeBtn.setAttribute('id', 'removeBtn');
    bookDiv.appendChild(removeBtn);
    
    library.appendChild(bookDiv);

    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item),1);
        // setData()
        displayBooks();
    });

    //add toggle ability to each book 'read' button on click
    readBtn.addEventListener('click', () => { 
        item.read = !item.read; 
        // setData(); 
        displayBooks();
    }); 
};

displayBooks()

