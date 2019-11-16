import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) 
  {

   }
   getData()
   {
     return this.http.get("http://15.206.178.194:9000/employees");
   }
   AddData(emp)
   {
    return this.http.post("http://15.206.178.194:9000/employees",emp);
   }
   delete(no)
   {
    return this.http.delete("http://15.206.178.194:9000/employees/"+no); 
   }
}
