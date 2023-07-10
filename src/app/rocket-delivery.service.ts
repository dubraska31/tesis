import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { LoginResponse } from "./login-response";
import { Menu } from "./menu";

@Injectable({ providedIn: 'root' })
export class RocketDeliveryService {

    private rocketDeliveryUrl = 'http://localhost:8080/';  // URL to web api
    private token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbiJ9.PRTaW4zUSHd5cWnQxsRcdnue5FBc3mtijvnELrPWYPGQDDhrCWLsvJUHmGXnp2vLheztEA5yzpzfovPe8Cwgcn7eK939kuc_RU87kk15OGruWmTa8Qz_Ztu1CXWB-0SbklTbPxQ26XjP4Vk3i4TttjKdLNWMJdw4X2HEjCzRK97I06ThjspffXiiSEgXe9TSfALS5V_WaWpEb2mjRNCO10lPaG7Wd1rzyotV92LuYPpxgqPjJn0woGAVFWG2jxy8rjfSSg-7qdW6BlriuwPUtfkFGfpGKf9gJG1xRuVuONJ0ix5dzJashL2KcwUI9qGcxICqPe1iVjtfZirYjBDX4A'

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token
        })
    };

    constructor(
        private http: HttpClient
    ) { }

    getMenus(): Observable<Menu[]> {
        return this.http.get<Menu[]>(this.rocketDeliveryUrl + 'api/listar-menus', this.httpOptions);
    }

    login(username: string, password: string): Observable<LoginResponse> {
        const body = new HttpParams()
            .set('username', username)
            .set('password', password);

        return this.http.post<LoginResponse>(this.rocketDeliveryUrl + 'login',
            body.toString(),
            {
                headers: new HttpHeaders()
                    .set('Content-Type', 'application/x-www-form-urlencoded')
            });
    }
}
