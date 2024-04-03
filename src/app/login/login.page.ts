import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: string = "";
  senha: string = "";
  loginl: string = "";
  senhal:string = "";
  erroLogin:boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  logar() {
   if (this.loginl == this.login && this.senhal == this.senha) {
    this.router.navigate(['/bemvindo'], { queryParams: { login: this.login, senha: this.senha } });
   }
   else{
    this.erroLogin = true
   }
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => { 
      this.login = params['login'];
      this.senha = params['senha'];
    });
  }
}
