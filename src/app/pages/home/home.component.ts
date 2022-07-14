import { Component, OnInit } from '@angular/core';
import { DetalhesDestaquesService } from 'src/app/services/detalhes-destaques.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: DetalhesDestaquesService) { }
  productData: any;

  ngOnInit(): void {
    this.productData = this.service.detalhesProdutos;
  }

}
