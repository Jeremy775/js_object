function Book(title, author, pages, read)
{
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

}

Book.prototype =
{
    info(){
        console.log(title, "by", author,",", pages, "pages,", read)
    }
    
}

const TheHobbit = new Book('TheHobbit', 'JRR Tolkien', 1093, 'not read');
TheHobbit.info();