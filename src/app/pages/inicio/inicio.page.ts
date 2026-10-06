import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton, 
  IonButtons, IonToggle 
} from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonButton,
    IonButtons, IonToggle, RouterLink
  ]
})
export class InicioPage {
  toggleDarkMode(event: any) {
    const isChecked = event.detail.checked;
    document.body.classList.toggle('ion-palette-dark', isChecked);
    document.documentElement.classList.toggle('ion-palette-dark', isChecked);
  }
}
