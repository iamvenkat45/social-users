import { Component, OnInit } from '@angular/core';

import { LoginService } from './../shared/login.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user;
  constructor(private loginService: LoginService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getLoggedInUser();
  }

  getLoggedInUser() {
    this.user = this.loginService.getLoggedInUser();
  }

  openSettingsModal() {
    const modalRef = this.modalService.open(SettingsComponent, {backdropClass: 'light-blue-backdrop', size: 'lg'});
    modalRef.result.then(() => {
      this.getLoggedInUser();
    });
  }

}
