import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "./message.service";
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Menu } from "./menu";

@Injectable({ providedIn: 'root' })
export class RocketDeliveryService {

    private rocketDeliveryUrl = 'http://localhost:8080/api/';  // URL to web api

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbiJ9.PRTaW4zUSHd5cWnQxsRcdnue5FBc3mtijvnELrPWYPGQDDhrCWLsvJUHmGXnp2vLheztEA5yzpzfovPe8Cwgcn7eK939kuc_RU87kk15OGruWmTa8Qz_Ztu1CXWB-0SbklTbPxQ26XjP4Vk3i4TttjKdLNWMJdw4X2HEjCzRK97I06ThjspffXiiSEgXe9TSfALS5V_WaWpEb2mjRNCO10lPaG7Wd1rzyotV92LuYPpxgqPjJn0woGAVFWG2jxy8rjfSSg-7qdW6BlriuwPUtfkFGfpGKf9gJG1xRuVuONJ0ix5dzJashL2KcwUI9qGcxICqPe1iVjtfZirYjBDX4A',
            'Access-Control-Allow-Origin': 'http://localhost:4200',
            'Access-Control-Allow-Credentials': 'true',
        })
    };

    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }

    getMenus(): Observable<Menu[]> {
        return this.http.get<Menu[]>(this.rocketDeliveryUrl + 'listar-menus', this.httpOptions)
            .pipe(
                tap(_ => this.log('fetched Menus')),
                catchError(this.handleError<Menu[]>('getMenus', []))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
    }

}
