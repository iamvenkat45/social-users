import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './shared/auth.guard';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';


const appRoutes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: 'home',
  component: HomeComponent,
  canActivate: [AuthGuard]
},
{
  path: 'users',
  component: UsersComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'home'
}];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UsersComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    SharedModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SettingsComponent]
})
export class AppModule { }
