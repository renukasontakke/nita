import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  emp;

  constructor(public dataService:DataService,public router:Router) { }

  add(formData){
    console.log(formData.form.value);
    this.emp=formData.form.value;

    this.dataService.AddData(this.emp).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['home']);
    })
  }

  ngOnInit() {
  }

}
