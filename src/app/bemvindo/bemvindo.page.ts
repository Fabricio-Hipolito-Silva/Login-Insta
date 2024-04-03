import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-bemvindo',
  templateUrl: './bemvindo.page.html',
  styleUrls: ['./bemvindo.page.scss'],
})
export class BemvindoPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

    login:string = "";
    senha:string = "";

  ngOnInit() {
    this.route.queryParams.subscribe(params => { 
      this.login = params['login'];
      this.senha = params['senha'];
      //Aqui ele tá pegando os parametros da pag do login , e colocando em variaveis login e senha, e mostrando no paragrafo
    });
  }

}
