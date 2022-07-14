import { Component, OnInit } from '@angular/core';
import { DetalhesDestaquesService } from 'src/app/services/detalhes-destaques.service';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.css']
})
export class DestaquesComponent implements OnInit {

  constructor(private service: DetalhesDestaquesService) { }
  productData: any;
  ngOnInit(): void {
    this.productData = this.service.detalhesProdutos
  }

}
