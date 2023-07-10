import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RocketDeliveryService } from '../rocket-delivery.service';
import { LoginResponse } from '../login-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  route: any;
  token: string = '';
  loginResponse: LoginResponse = { token: '' };

  constructor(
    private router: Router,
    private rocketDeliveryService: RocketDeliveryService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.rocketDeliveryService.login(username, password)
      .subscribe(data => {
        this.loginResponse = data
        console.log('this.loginResponse.token: ' + this.loginResponse.token);

        if (username === 'admin') {
          this.router.navigate(['/admin-home']);
        } else {
          this.router.navigate(['/dashboard']);
        }
      }, error => {
        console.log('error: ' + error.message);
        this.isLoginFailed = true;
        this.errorMessage = "Credenciales erroneas";
      });
  }
}
