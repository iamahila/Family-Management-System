import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  genders: string[] = ['Male', 'Female'];

  signUpForm!: FormGroup;

  availableNames = ['Nila', 'Ahila', 'Karthick'];
  
  constructor(private formBuilder: FormBuilder, private apiService: ApiService){}

  get hobbiesControls(){
    return (this.signUpForm.get('hobbies') as FormArray).controls;
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userData : new FormGroup({
        username: new FormControl('', [Validators.required, this.nameValidation.bind(this)]),
        age: new FormControl('', Validators.required),
      }),
      
      email: new FormControl('', 
      {
        validators: [Validators.required, Validators.email],
        asyncValidators: [this.asyncEmailValidation.bind(this)],
      }),
      gender: new FormControl('female'),
      hobbies: new FormArray([])
    });

    //statusChange
  this.signUpForm.statusChanges.subscribe(data =>{
    console.log('status changed' , data);
  });

  this.signUpForm.valueChanges.subscribe(data => {
    console.log('Value changed: ', data);
  });

    //form builder
    // this.signUpForm = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]]
    // })
  }

  onSubmit(){
    console.log(this.signUpForm);
  }

  get nameValid(): boolean{
    const control = this.signUpForm.get('userData.username');
    return !!(control?.errors && control?.errors['nameIsRequired'])
  }

  get nameRequired(): boolean{
    const control = this.signUpForm.get('userData.username');
    return !!(control?.errors && control?.errors['required'])
  }

   get emailRequired(): boolean{
    const control = this.signUpForm.get('email');
    return !!(control?.errors && (control?.errors['required'] || control?.errors['email']))
  }

  get emailValid(): boolean{
    const control = this.signUpForm.get('email');
    return !!(control?.errors && control?.errors['emailInValid'])
  }

  //custom validators
  nameValidation(control: FormControl): {[s: string]: boolean} | null {
    if(this.availableNames.includes(control.value)){
      return {nameIsRequired: true};
    }
    return null;
  }

  asyncEmailValidation(control: AbstractControl) : Promise<any> | Observable<any> { 
    return new Observable(observer =>{
      const availableEmails = ['aaa@gmail.com', 'ahila@gmail.com'];
      if(availableEmails.includes(control.value)){
        observer.next({emailInValid: true});
      }
      else{
        observer.next(null);
      }
      observer.complete();      
    });
    

  
  }

  addHobby(){
    const control = new FormControl('', Validators.required);    
    (this.signUpForm.get('hobbies') as FormArray).push(control);
  }

}
