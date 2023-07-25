import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from '../login-response';
import { RocketDeliveryService } from '../rocket-delivery.service';
import { UtilService } from '../util-service';

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
    private rocketDeliveryService: RocketDeliveryService,
    private utilService: UtilService
  ) { }

  ngOnInit(): void {
    this.utilService.limpiarCarrito();
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.rocketDeliveryService.login(username, password)
      .subscribe(data => {
        this.loginResponse = data;

        this.utilService.setToken(this.loginResponse.token);

        this.rocketDeliveryService.buscarContactoByUsername(username)
          .subscribe(data => {
            this.utilService.setIdContacto(data.idContacto.toString());
            this.utilService.setUserName(username);

            if (username === 'admin') {
              this.router.navigate(['/admin-home']);
            } else {
              this.router.navigate(['/dashboard']);
            }
          });
      }, error => {
        console.log('error: ' + error.message);
        this.isLoginFailed = true;
        this.errorMessage = "Credenciales erroneas";
      });
  }
}
