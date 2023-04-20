import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
values:any;
  constructor(private http:HttpClient) { 
    
  }

  ngOnInit(): void {
    this.getValue();
  }

  getValue(){
    this.http.get('https://localhost:44343/weatherforecast').subscribe(responce =>{
      this.values = responce;
    },error =>{
      console.log(error);
    });
  }
}
