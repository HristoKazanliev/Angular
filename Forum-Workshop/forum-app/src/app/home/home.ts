import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header";
import { FooterComponent } from "../shared/footer/footer";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {}
