import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  login:string = ""
  senha:string = ""
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  
  cadastrar(){
    this.router.navigate(['/login'], { queryParams: { login: this.login, senha: this.senha} });
  }
 
  ngOnInit() {
  }

}
