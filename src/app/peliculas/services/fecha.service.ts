import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FechaHoraService {

  obtenerFechaActual(): string {
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
    const mes = fechaActual.getMonth() + 1; // Los meses van de 0 a 11, por lo que se suma 1
    const dia = fechaActual.getDate();
    return `${año}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}`;
  }

}
