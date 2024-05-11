import { Component } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {
  form!:FormGroup;
  constructor(private formBuilder:FormBuilder)
  {
    this.form=this.formBuilder.group(
      {
        email:['',[]],
        password:['',[],[]]
      }
    )
  }
  onEnviar(event:Event)
  {
    console.log(this.form.value)
  }
}
