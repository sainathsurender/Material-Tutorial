import { Component, OnInit } from '@angular/core';
import { MatDialog, MatMenuTrigger } from '@angular/material';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  trigger: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }

}
