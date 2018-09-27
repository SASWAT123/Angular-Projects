import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { InventoryService } from '../inventory.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empform',
  templateUrl: './empform.component.html',
  styleUrls: ['./empform.component.css']
})
export class EmpformComponent implements OnInit {
  emp: Employee;

  constructor(private inv: InventoryService,
    private route: ActivatedRoute,
    private router: Router) { }

  addEmployee() {
      this.inv.addEmployees(this.emp);
      this.router.navigate(['display']);
    }

  ngOnInit() {
    this.emp = new Employee();
  }

}
