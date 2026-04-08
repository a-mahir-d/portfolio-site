import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LangugageService } from '../services/langugage.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NgOptimizedImage, TranslateModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  currentLanguage: string = '';
  isLoggedIn: boolean = false;
  isDropdownVisible: boolean = false;
  isMenuOpen: boolean = false;

  constructor(private languageService: LangugageService, private router: Router) {}

  ngOnInit(): void {
    this.currentLanguage = this.languageService.getSavedLang() || 'TR';
    this.currentLanguage = this.currentLanguage.toUpperCase();
  }

  isActive(path: string): boolean{
    const urlSegments = this.router.url.split('/');
    const currentRoute = urlSegments[1];
    return currentRoute === path;
  }

  onLanguageChange(){
    this.languageService.setLanguage(this.currentLanguage == "TR" ? "en" : "tr");
    this.currentLanguage = this.currentLanguage == "TR" ? "EN" : "TR";
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}