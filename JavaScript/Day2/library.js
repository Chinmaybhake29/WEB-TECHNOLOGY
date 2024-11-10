"use strict";

class auth {
  constructor() {
    this.details = [
      {
        email: "chinmay@gmail.com",
        password: "password123",
      },
      {
        email: "john@gmail.com",
        password: "john123",
      },
      {
        email: "admin@gmail.com",
        password: "admin123",
      },
      {
        email: "user@gmail.com",
        password: "user123",
      },
      {
        email: "guest@gmail.com",
        password: "guest123",
      },
    ];
  }
  checkemail(email) {
    console.log(email);
    var exp =
      /^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,})(\.[a-zA-z]{2,})?$/;
    var result = exp.test(email);
    return result;
  }
  checkpassword(password) {
    console.log(password);
    var exp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#\$]).{4,12}$/;
    var result = exp.test(pass);
    return result;
  }
  checkemailandpassword() {}
}

export default auth;
