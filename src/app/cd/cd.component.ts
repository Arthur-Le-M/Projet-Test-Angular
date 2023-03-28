import { Component, Input, OnInit } from '@angular/core';
import { CD } from 'src/models/cd';
import { CdsService } from '../services/cds.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss']
})
export class CdComponent implements OnInit {
  @Input() leCd!: CD;
  unCd!: CD;

  constructor(private cdService:CdsService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    const idCd = this.router.snapshot.params['id'];
    if(idCd !== undefined){
      this.unCd = this.cdService.getCdByID(+idCd);

    }
    else{
      this.unCd = this.leCd;
    }
  }

  onAddCD() {
    this.unCd.quantite ++;
  }
}
