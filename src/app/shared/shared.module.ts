import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginService } from './login.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent],
  providers: [LoginService, AuthGuard],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
