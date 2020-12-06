import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  customersForm: FormGroup;

  ngOnInit(): void {
    this.populateForm();

  }
  onSubmit() {
    console.log( this.customersForm);
  }

  public populateForm() {
    this.customersForm = new FormGroup({
      name: new FormControl(''),
      phone : new FormControl('', [Validators.required, Validators.minLength(9),
      Validators.pattern(('1[2-9]|[3-4][0-9]|5[0-4]'))]),
      email : new FormControl('', [Validators.required, Validators.email,
      Validators.pattern(/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i)]),
      comments: new  FormControl('')
    });
  }
}


