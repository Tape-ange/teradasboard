import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatDialogModule } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatRadioModule} from '@angular/material/radio';
import {MatPaginatorIntl, PageEvent,MatPaginator,MatPaginatorModule} from '@angular/material/paginator'
import { MatNativeDateModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { MatChipSelectionChange } from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,FormsModule, 
    ReactiveFormsModule,
    MatDialogModule, 
    MatToolbarModule, MatIconModule, MatButtonModule, MatDividerModule,MatPaginatorModule, MatCheckboxModule,
    MatDatepickerModule, 
    MatNativeDateModule,  
    MatRadioModule
  ], exports :[
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule,MatDialogModule,MatDialogModule, MatToolbarModule, MatIconModule, MatButtonModule, MatDividerModule, MatPaginatorModule, MatCheckboxModule, MatRadioModule
  ], 
})
export class SharedModule { }
