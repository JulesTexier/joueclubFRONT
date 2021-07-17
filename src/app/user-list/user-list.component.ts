import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() userFirstname: string = "";
  @Input() userLastname: string = "";
  @Input() userBirthdate: string = "";
  @Input() userAmount: number = 0;
  @Input() userAdress: string = "";
  @Input() userZipcode: number = 0;
  @Input() userCity: string = "";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
