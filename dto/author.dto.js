class AuthorDTO {
  constructor(author) {
    this.id = author.id;
    this.email = author.email;
    this.firstName = author.firstName;
    this.lastName = author.lastName;
  }
}
  module.exports = AuthorDTO;
  