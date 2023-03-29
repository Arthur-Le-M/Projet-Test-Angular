import { Component, Input, OnInit } from '@angular/core';
import { CD } from 'src/models/cd';
import { CdsService } from '../services/cds.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss']
})
export class CdComponent implements OnInit {
  @Input() leCd!: CD;
  unCd!: CD;
  obsCD$!: Observable<CD>;

  constructor(private cdService:CdsService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    const idCd = this.router.snapshot.params['id'];
    if(idCd !== undefined){
      this.cdService.getCdByID(+idCd).subscribe(cd => this.unCd = cd);
    }
    else{
      this.unCd = this.leCd;
    }
  }

  onAddCD() {
    this.unCd.quantite ++;
  }
}
