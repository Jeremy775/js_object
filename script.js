let myLibrary = [
    {
        title : 'un livre',
        author : 'quelqun',
        pages : 2324,
        read : true
    }
];

myLibrary.forEach((book) => Book.showBooks(book))


class Book {
    constructor(title, author, pages, read)
    {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }


    static addBook(title, author, pages, read)
    {
        let book = new Book(title, author, pages, read)
        myLibrary.push(book)
    }

    static showBooks(book)
    {
        const list = document.querySelector('#book-list')

        const row = document.createElement('tr')

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td><a href="#" class="btn delete">X</a></td>
        `;

        list.appendChild(row)
    }
}





