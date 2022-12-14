import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(typeof this.profileForm.value);
    console.log(typeof JSON.stringify(this.profileForm.value));


  }

}
