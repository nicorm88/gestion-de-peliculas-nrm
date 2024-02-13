import { Component, Pipe } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  onLogin() {
    this.authService.login('john.due@gmail.com','1234')
      .subscribe( user => {
        this.router.navigate(['/'])
        console.log({user})
      })
  }

}
