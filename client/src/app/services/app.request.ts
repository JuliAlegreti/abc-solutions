import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RequestService {
    //URL del servidor donde se consumen los servicios
    private url:string = "http://localhost:3000/";

    constructor(private http: Http) {}

    /**
     * Función qué realiza la peticion get
     */
    public get(url:string, parameters?:any) {        
        return this.http.get(this.url + url, {params:parameters}).pipe(map(res => res.json()), catchError(this.handleError));
    }
    

    /**
     * En caso tal de que haya un error en el Observable, crea la excepción
     */
    private handleError(error: Response | any) {        
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }        
        return Promise.reject(errMsg);
    }
}