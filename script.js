// Mon objet
let myLibrary = [
    {
        title : 'un livre',
        author : 'quelqun',
        pages : 2324,
        read : true
    },{
        title : 'Silmarillion',
        author : 'Tolkien',
        pages : 2324,
        read : false
    }
];


// Constructeur de l'objet book
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}


function inputBook () {

    // Get reference to the form element
    const form = document.getElementById("book-form");

    // Get reference to the submit element of the form el
    form.addEventListener('submit', callbackFunction);

    function callbackFunction(event) {
        event.preventDefault();
        const myFormData = new FormData(event.target);

        const formDataObj = Object.fromEntries(myFormData.entries());
        myLibrary.push(formDataObj)
    };
    
}
// inputBook()

function addBook (title, author, pages ,read)
{
    let book = new Book(title, author, pages, read)
    myLibrary.push(book)
}


// Intègre les propriété de l'objet dans le html
function displayBooks () {

    let table = document.getElementById('book-list');

    myLibrary.forEach(myLibrary => {
        let tr = document.createElement('tr');
        for (let key in myLibrary) { 
        let td = document.createElement('td');
        td.innerHTML= myLibrary[key];
        tr.appendChild(td);
        };
        table.appendChild(tr);
    });
}

addBook('The witcher', 'Sapowski', '1242', 'read')
displayBooks()

