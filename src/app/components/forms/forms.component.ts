import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  name = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

  updateName() {
    this.name.setValue('Fer');
  }
}
