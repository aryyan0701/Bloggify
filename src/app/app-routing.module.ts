import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import { AIMLComponent } from './components/aiml/aiml.component';
import { WebAppDevComponent } from './components/web-app-dev/web-app-dev.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },           
  { path: 'signup', component: SignupComponent },
  { path: 'aiml', component: AIMLComponent },
  { path: 'web-app', component: WebAppDevComponent }
 ];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
