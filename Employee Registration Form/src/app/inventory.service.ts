import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  emp: Employee[];

  constructor() {
    this.emp = [];
   }

   addEmployees(employee: Employee){
     this.emp.push(employee);
   }

   getAllEmployees(){
     return this.emp;
   }
}
