function Book(title, author, pages, read)
{
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function() {
        return (title + " by " + author + ", " + pages + " pages, " + read)
    }
}

const TheHobbit = new Book('The Hobbit', 'JRR Tolkien', 1093, 'not read');
console.log(TheHobbit.info());