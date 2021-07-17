import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class UserService {

  users = [{}];
  constructor(private httpClient: HttpClient){}

  addUser(firstname: string, lastname:string, birthdate: string, amount: number, adress: string, zipcode: number, city: string) {
    const userObject = {
      firstname: '',
      lastname: '',
      birthdate: '',
      amount: 0,
      adress: '',
      zipcode: 0,
      city: ''
    };

    userObject.firstname = firstname;
    userObject.lastname = lastname;
    userObject.birthdate = birthdate;
    userObject.amount = amount;
    userObject.adress = adress;
    userObject.zipcode = zipcode;
    userObject.city = city;
    this.users.push(userObject)
    console.log(this.users)

  };

  saveUserToServer(firstname: string, lastname:string, birthdate: string, amount: number, adress: string, zipcode: number, city: string) {
    const userObject = {
      firstname: '',
      lastname: '',
      birthdate: '',
      amount:0,
      adress: '',
      zipcode: 0,
      city: ''
    };
    userObject.firstname = firstname;
    userObject.lastname = lastname;
    userObject.birthdate = birthdate;
    userObject.amount = amount;
    userObject.adress = adress;
    userObject.zipcode = zipcode;
    userObject.city = city;

    console.log('hello');
    this.httpClient
      .post('http://localhost:3000/inscrits.json', userObject)
      .subscribe({ 
        next: () => { console.log("enregistrement OK")},
        error: (error) => { console.log('enregistrement KO' + error)}
      });
    };
  
}