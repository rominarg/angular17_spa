import { Component } from '@angular/core';
import { User } from '../../../models/user';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  form:FormGroup;
  usuario: User = new User();

  constructor(private formBuilder: FormBuilder, private authService:AuthService , private router: Router) { 
    this.form= this.formBuilder.group(
      {
        nombre: ['', [Validators.required, Validators.minLength(3)]], // Mínimo 3 caracteres
        apellido: ['', [Validators.required]],
        dni: ['', [Validators.required, Validators.pattern('[0-9]{8}')]], 
        fechaNacimiento: ['', [Validators.required]],
        password1: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]], // Mínimo 8 caracteres, al menos una mayúscula, una minúscula, un número y un carácter especial
        password2:['',[Validators.required]],
        email:['', [Validators.required, Validators.email]]   
      }
    )
  }

  onEnviar(event: Event): void {
    event.preventDefault; 
    if (this.form.valid)
    {
      console.log("Enviando  al servidor...");
      
      this.authService.createUser(this.form.value as User).subscribe(
        data => {
          console.log(data.id);
          console.log( this.form.value as User)
            if (data.id>0)
            {
              alert("El registro ha sido creado satisfactoriamente. A continuación, por favor Inicie Sesión.");
              this.router.navigate(['/iniciar-sesion'])
            }
        })
    }
    else
    {
      this.form.markAllAsTouched(); 
    }
  }

}
