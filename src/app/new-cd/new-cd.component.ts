import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { CD } from 'src/models/cd';

@Component({
  selector: 'app-new-cd',
  templateUrl: './new-cd.component.html',
  styleUrls: ['./new-cd.component.scss']
})
export class NewCDComponent {
  formulaire !: FormGroup;
  currentCD$ !: Observable<CD>;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.formulaire = this.formBuilder.group({
      title: [null],
      author: [null],
      price: [null],
      thumbnail: [null],
      dateDeSortie: [null],
      quantite: [null]
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
    console.log(this.formulaire.value);
  }
}
