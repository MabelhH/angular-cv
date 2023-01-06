import { Component , EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements  OnInit{

  public formlogin!: FormGroup;
  correo!:string;

  @Output() guardar:EventEmitter<string>=new EventEmitter<string>() 

  constructor(private formBuilder:FormBuilder){

  }
  anadir(nombre:string, apellido:string, email:string ,password:string){
    this.guardar.emit(nombre+':'+apellido+':'+email+':'+password+':')
  }
  ngOnInit(): void {
    this.formlogin = this.formBuilder.group({
      nombre:['', 
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ],
      apellido:['', 
        [
          Validators.required,
          Validators.maxLength(8)
        ]
      ],
      email:['', 
        [
          Validators.required,
          Validators.email
        ]
      ],
      password:['', 
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ],
      term:['',
        [
          Validators.required,
          Validators.requiredTrue
        ]
      ]
    })

    
  }


    
  }


  



