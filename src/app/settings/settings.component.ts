import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './../shared/login.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  user;
  userForm: FormGroup;
  constructor(public activeModal: NgbActiveModal, private logginSevice: LoginService) { }

  ngOnInit() {
    this.user = this.logginSevice.getLoggedInUser();
    this.createUserForm();
  }

  createUserForm() {
    this.userForm = new FormGroup({
      userName: new FormControl(this.user.userName)
    });
  }

  onSaveSettings() {
    const updatedUser = {
      userName: this.userForm.get('userName').value,
      password: this.user.password
    };
    this.logginSevice.setLoggedInUser(updatedUser);
    this.activeModal.close();
  }

}
