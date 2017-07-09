import {Component} from '@angular/core';
import {Employee} from './Models/employee';

@Component({
    selector:'employee-root',
    templateUrl:'./Views/employee-app.component.html'
})

export class EmployeeComponent{
   title:string;
   submitted:boolean;
    //Two Property Binding
    empObj:Employee = new Employee();

    // employee collection
     public shopItems = [
      {name: "Shirt",color:"green"},
      {name: "Pant",color:"blue"},
      {name: "Sarees",color:"pink"},
      {name: "Jeans",color:"gray"},
      {name: "T-Shirt",color:"black"},
   ];


    employees: Array<Employee> = this.shopItems;
    
}