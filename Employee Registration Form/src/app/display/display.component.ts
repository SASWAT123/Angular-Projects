import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { InventoryService } from '../inventory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  emps: Employee[];

  ladies = 0;
  gents = 0;

  constructor(private inv: InventoryService, private router: Router) { }

  ngOnInit() {
    this.emps = this.inv.getAllEmployees();

    for (const val of this.emps) {
      if (val.gender === 'Lady') {
        this.ladies = this.ladies + 1;
      } else {
        this.gents = this.gents + 1;
      }
    }
  }



}
