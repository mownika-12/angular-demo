import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule ,AbstractControl ,ValidationErrors } from '@angular/forms';
@Component({
  selector: 'app-registration',
   standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
    registrationForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registrationForm= this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required],
      phone: ['', Validators.required],
      website: ['', Validators.required],
      address:this.fb.group({
         street: ['', Validators.required],
        suite: [''],
        city: ['', Validators.required],
        zipcode: ['', Validators.required],

      }),
      company:this.fb.group({
         name: ['', Validators.required],
        catchPhrase: ['', Validators.required],
        bs: ['', Validators.required]
      }),
  });
this.registrationForm.controls['firstname'].setValue('John');
this.registrationForm.controls['lastname'].setValue('Doe');
this.registrationForm.controls['email'].setValue('johndoe@example.com');
this.registrationForm.controls['birthDate'].setValue('1973-01-22');
this.registrationForm.controls['phone'].setValue('(555) 555-1234');
this.registrationForm.controls['website'].setValue('www.johndoe.com');
this.registrationForm.get('address.street')?.setValue('123 Main Street');
this.registrationForm.get('address.suite')?.setValue('Apt. 4');
this.registrationForm.get('address.city')?.setValue('Anytown');
this.registrationForm.get('address.zipcode')?.setValue('12345-6789');
this.registrationForm.get('company.name')?.setValue('ABC Company');
this.registrationForm.get('company.catchPhrase')?.setValue('Innovative solutions for all your needs');
this.registrationForm.get('company.bs')?.setValue('Marketing');

  }  
  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Value:',this.registrationForm.value);
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }

}
