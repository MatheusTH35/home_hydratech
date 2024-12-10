import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  async openFilterModal() {
    // Lógica para abrir o modal (mantida)
  }

  goBack() {
    // Substitua '/rota-anterior' pela rota correta de redirecionamento
    this.router.navigate(['/rota-anterior']);
  }
}