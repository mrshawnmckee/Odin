function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    let haveRead = "I have not read this book"
    if (read === "yes"){
        haveRead = "I have read this book"
    }

    this.info = function () {
        return `${title}, ${author}, There are ${pages} pages, ${haveRead}`
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "no")
console.log(theHobbit.info())