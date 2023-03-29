import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map, Observable, tap } from 'rxjs';
import { CD } from 'src/models/cd';
import { CdsService } from '../services/cds.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-cd',
  templateUrl: './new-cd.component.html',
  styleUrls: ['./new-cd.component.scss']
})
export class NewCDComponent {
  formulaire !: FormGroup;
  currentCD$ !: Observable<CD>;
  service !: CdsService;
  router !: Router;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let thumbRegex = new RegExp('https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp)$');
    this.formulaire = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      author: [null, [Validators.required, Validators.minLength(1)]],
      price: [null, [Validators.required, Validators.min(1)]],
      thumbnail: [null, [Validators.required, Validators.pattern(thumbRegex)]],
      dateDeSortie: [null, [Validators.required, Validators.minLength(1)]],
      quantite: [null, [Validators.required, Validators.min(1)]]
    });

    this.currentCD$ = this.formulaire.valueChanges.pipe(map(formValue => (
      {
        id: 0,
        title: formValue.title,
        author: formValue.author,
        price: formValue.price,
        thumbnail: formValue.thumbnail,
        dateDeSortie: formValue.dateDeSortie,
        quantite: formValue.quantite
      }
    )));
  }

  addCD(){
    let newCd: CD = {
      id: 0,
      title: this.formulaire.get('title')?.value,
      author: this.formulaire.get('author')?.value,
      price: this.formulaire.get('price')?.value,
      thumbnail: this.formulaire.get('thumbnail')?.value,
      dateDeSortie: this.formulaire.get('dateDeSortie')?.value,
      quantite: this.formulaire.get('quantite')?.value
    };

    this.service.addCd(newCd).pipe(
      tap(() => this.router.navigate(['/list-cds']))).subscribe();
  }
}
