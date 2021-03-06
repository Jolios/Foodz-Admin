import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Admin } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AdminService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Admin[]>(`${environment.apiUrl}/users`);
    }
}