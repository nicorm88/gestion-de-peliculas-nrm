import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumeroAleatorioService {

  generarNumeroAleatorio(): number {
    // Generar un número aleatorio entre 0 y 1
    const numeroAleatorio = Math.random();

    // Escalar el número aleatorio al rango deseado (1-100)
    const numeroFinal = Math.floor(numeroAleatorio * 100) + 1;

    return numeroFinal;
  }

}
