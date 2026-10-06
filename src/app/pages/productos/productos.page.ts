import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonSpinner,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
} from '@ionic/angular';
import { Product, ProductsResponse } from '../../models/producto.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [
    CurrencyPipe,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonSpinner,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonCardSubtitle
  ]
})
export class ProductosPage implements OnInit {
  private productService = inject(ProductService);
  private cdr = inject(ChangeDetectorRef);

  products: Product[] = [];
  total = 0;
  loading = false;
  error = '';

  ngOnInit(): void {
    this.loadProducts();
  }

  limit = 10;
  skip = 0;

  loadProducts(): void {
    this.loading = true;
    this.productService.getProducts(this.limit, this.skip).subscribe({
      next: (res) => {
        this.products = res.products;
        this.total = res.total;
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  paginaSiguiente() {
    if (this.skip + this.limit < this.total) {
      this.skip += this.limit;
      this.loadProducts();
    }
  }

  paginaAnterior() {
    if (this.skip >= this.limit) {
      this.skip -= this.limit;
      this.loadProducts();
    }
  }
}
