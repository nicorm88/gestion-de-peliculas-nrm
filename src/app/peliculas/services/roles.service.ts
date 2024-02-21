import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/auth/services/common.service';
import { Rol } from '../interfaces/rol';
import { ApiResponse } from 'src/app/auth/interfaces/api-response';
import { enviromentsSGE } from 'src/environments/environments';

const ENDPOINT = 'rol';
const URL_BASE = enviromentsSGE.baseUrl


@Injectable({
  providedIn: 'root'
})
export class RolesService {

  roles: Rol[] = [];

  constructor(private http: HttpClient, private commonService: CommonService) {
  }

  getAllRoles(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${URL_BASE}/${ENDPOINT}.php`, { headers: this.commonService.headers });
  }

  addRol(rol: Rol) {
    const body = JSON.stringify(rol);
    return this.http.post<ApiResponse>(`${URL_BASE}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
  }

  editRol(rol: Rol) {
    const body = JSON.stringify(rol);
    return this.http.put<ApiResponse>(`${URL_BASE}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
  }

  deleteRol(idRol: string | number) {
    return this.http.delete<ApiResponse>(`${URL_BASE}/${ENDPOINT}.php?id=${idRol}`, { headers: this.commonService.headers });
  }

  removeRol(idRol: any) {
    this.roles = this.roles.filter(rol => {
      return Number(rol.id_rol) !== Number(idRol);
    });
  }

  updateRol(rol: Rol) {
    let index = null;
    this.roles.filter((rolFilter, indexFilter) => {
      if (rol.id_rol === rolFilter.id_rol) {
        index = indexFilter;
      }
    });

    if (index) {
      this.roles[index] = rol;
    }
  }
}
