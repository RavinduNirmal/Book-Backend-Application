class BookDTO {
    constructor({ ISBNno, Category, Authour}) {
      this.ISBNno = ISBNno;
      this.Category = Category; 
      this.Authour = Authour;
    }
  }
  
  module.exports = BookDTO;
  