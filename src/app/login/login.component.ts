import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, password } = this.form;

    if(username === 'esba' && password === 'hola'){
      this.router.navigate(['/dashboard']);
    } else {
      this.isLoginFailed = true;
      this.errorMessage = "Credenciales erroneas";
    }

    // this.authService.login(username, password).subscribe({
    //   next: data => {
    //     this.storageService.saveUser(data);

    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     this.roles = this.storageService.getUser().roles;
    //     this.reloadPage();
    //   },
    //   error: err => {
    //     this.errorMessage = err.error.message;
    //     this.isLoginFailed = true;
    //   }
    // });
  }
}
