import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { FinalComponent } from './final/final.component';



@NgModule({
  declarations: [
   CuerpoComponent,
   FinalComponent
   
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  exports:[
    CuerpoComponent,
    FinalComponent
  ]
})
export class BodyModule { }
