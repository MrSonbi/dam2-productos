import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photos } from '../models/store-product.model';
@Injectable({
    providedIn: 'root'
})
export class PhotosService {
    private http = inject(HttpClient);
    private apiUrl = 'https://jsonplaceholder.typicode.com/photos';
    getPhotos(): Observable<Photos[]> {
        return this.http.get<Photos[]>(this.apiUrl);
    }
}