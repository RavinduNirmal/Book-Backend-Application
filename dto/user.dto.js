class UserDTO {
    constructor({ id, email, contactNo ,password}) {
      this.id = id;
      this.email = email;
      this.contactNo = contactNo;
      this.password = password;
    }
  }
  
  module.exports = UserDTO;
  