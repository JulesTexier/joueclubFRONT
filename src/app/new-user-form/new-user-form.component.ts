import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss']
})
export class NewUserFormComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
      console.log(form.value)
      const firstname = form.value['firstname'];
      const lastname = form.value['lastname'];
      const birthdate = form.value['birthdate'];
      const amount = form.value['amount'];
      const adress = form.value['adress'];
      const zipcode = form.value['zipcode'];
      const city = form.value['city'];
      this.userService.saveUserToServer(firstname, lastname, birthdate, amount, adress, zipcode, city);
      this.userService.addUser(firstname, lastname, birthdate, amount, adress, zipcode, city);
  }


}
