import { Component,OnInit } from '@angular/core';
import { CD } from '../../models/cd';
import { CdsService } from '../services/cds.service';

@Component({
  selector: 'app-list-cds',
  templateUrl: './list-cds.component.html',
  styleUrls: ['./list-cds.component.scss']
})
export class ListCDsComponent implements OnInit {
  listcd!: CD[];

  constructor(private myCDsService: CdsService) { }

  ngOnInit(): void {
    this.listcd = this.myCDsService.getAllCds();
  }
}
