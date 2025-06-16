import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit{

  httpForm!: FormGroup;
  post = [];

  constructor(private formBuilder: FormBuilder, private http: HttpClient){}


  ngOnInit(): void {
    this.getAvailableData();
    this.httpForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });


  }

  onSubmit(){
    console.log(this.httpForm.value);
    this.http.post('https://test-angular-363a7-default-rtdb.firebaseio.com/posts.json', this.httpForm.value).subscribe(response => {
      console.log(response);
    this.getAvailableData();
    this.httpForm.reset(); 
    });
  }

  get titleRequired(){
    const control = this.httpForm.get('title');
    return (control?.errors && (control?.errors['required']));
  }

  get contentRequired(){
     const control = this.httpForm.get('content');
     return (control?.errors && (control?.errors['required']));
  }

  getAvailableData(){
    this.http.get("https://test-angular-363a7-default-rtdb.firebaseio.com/posts.json", {
      params: new HttpParams().set('name', '-OSmDvjyC4Iamatz_icn')
    }).subscribe(response => {
       this.post=[];
      for(let key in response){
        this.post.push({...response[key], key});
      }
    })
  }

  clearPost(event: Event){
    event.preventDefault();
    this.http.delete("https://test-angular-363a7-default-rtdb.firebaseio.com/posts.json").subscribe(response =>{
      console.log(response);
      this.post = [];
    })
  }

}
