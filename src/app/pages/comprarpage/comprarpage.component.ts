import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalhesDestaquesService } from 'src/app/services/detalhes-destaques.service';



@Component({
  selector: 'app-comprarpage',
  templateUrl: './comprarpage.component.html',
  styleUrls: ['./comprarpage.component.css']
})
export class ComprarpageComponent implements OnInit {

  constructor(private param: ActivatedRoute, private service: DetalhesDestaquesService) { }
  getComprarId: any;
  comprarData: any;

  ngOnInit(): void {
    this.getComprarId = this.param.snapshot.paramMap.get('id')
    if (this.getComprarId) {
      this.comprarData = this.service.detalhesProdutos.filter((value) => {
        return value.id == this.getComprarId;
      })
    }
  }

}
