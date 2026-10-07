import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton,
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent
} from '@ionic/angular';
import { Photos } from '../../models/store-product.model';
import { PhotosService } from '../../services/store.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
    IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent
  ]
})
export class CatalogoPage implements OnInit {
  private photosService = inject(PhotosService);
  private cdr = inject(ChangeDetectorRef);
  photos: Photos[] = [];
  loading = true;
  error = '';

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.photosService.getPhotos().subscribe({
      next: (data) => {
        this.photos = data.slice(0, 20); 
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
        this.error = 'Error crítico al conectar con la API';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
}