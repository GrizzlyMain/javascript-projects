// Define your Book class here:
class Books {
    constructor(title, author, copyrightDate, isbn, numberOfPages, numberofCheckOuts, discarded){
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.numberOfPages = numberOfPages;
        this.numberofCheckOuts = numberofCheckOuts;
        this.discarded = discarded;
    }

    checkout (uses=1){
        this.numberofCheckOuts += uses;
    }
}


// Define your Manual and Novel classes here:

class Manual extends Books{
    constructor(title, author, copyrightDate, isbn, numberOfPages, numberofCheckOuts, discarded){   
    super(title, author, copyrightDate, isbn, numberOfPages, numberofCheckOuts, discarded);
    }
    dispose(currentYear){
        if (currentYear - this.copyrightDate > 5){
            this.discarded = 'Y';
        }
    }
}

class Novel extends Books {
    constructor(title, author, copyrightDate, isbn, numberOfPages, numberofCheckOuts, discarded){  
    super(title, author, copyrightDate, isbn, numberOfPages, numberofCheckOuts, discarded);  
    }
    dispose(){
        if (this.numberofCheckOuts > 100){
            this.discarded = 'Y';
        }
    }
}
// Declare the objects for exercises 2 and 3 here:

let prideAndPrejudice = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111', 432, 32, 'N');
let shuttleBuilding = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, 0000000000, 1147, 1, 'N');

console.log(shuttleBuilding);



// Code exercises 4 & 5 here:
shuttleBuilding.dispose(2024);
console.log(shuttleBuilding.discarded);

prideAndPrejudice.checkout(5);
prideAndPrejudice.dispose();
console.log(prideAndPrejudice.numberofCheckOuts);
