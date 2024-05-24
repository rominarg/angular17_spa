import { Injectable } from '@angular/core';
import { Profesional } from '../models/profesional';

@Injectable({
  providedIn: 'root'
})
export class QuienesSomosService {

  /*profesionalList!: { id: number, name: string; perfil: string, photo: string }[]*/
  profesionalList:Profesional[]=[];
  constructor() { }

  obtenerProfesionales()
  {
    /* this.profesionalList = [
      { id:1, name: "Federico Gonzales", perfil:"Desarrollador Web",photo:"assets/team/1.jpg"},
      { id:2, name: "Diana López", perfil:"Desarrollador Web",photo:"assets/team/2.jpg"},
      { id:3, name: "Joaquín Aguirre", perfil:"Diseñador",photo:"assets/team/3.jpg"},
    ];*/

    this.profesionalList.push (new Profesional(1,"Federico Gonzales","Desarrollador Web","assets/team/1.jpg"));
    this.profesionalList.push(new Profesional(2,"Diana López","Desarrollador Web", "assets/team/2.jpg") );
    this.profesionalList.push(new Profesional(3,"Joaquín Aguirre","Diseñador","assets/team/3.jpg"))
    return this.profesionalList;
  }
}