import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//Precisa Importar essas classes para o serviço router do angular funcionar

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 login: string = "";
 senha: string = "";

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { } //Precisa injetar essas depêndencias no constructor

  valorLogin() {
    this.router.navigate(['/bemvindo'], { queryParams: { login: this.login, senha: this.senha} });
    //A linha acima está indo até o bemvindo, jogando o valor de login e senha, em variaveis chamadas login e senha. e mandando elas como
    //parâmetro para ver na pag bemvindo
  }

  ngOnInit() {}
};
  

