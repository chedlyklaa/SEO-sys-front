import { Component, OnInit } from '@angular/core';
import { KeywordTheme } from '../KeywordTheme';
import { ThemesService } from '../service/themes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-keyword-theme',
  templateUrl: './keyword-theme.component.html',
  styleUrls: ['./keyword-theme.component.css']
})
export class KeywordThemeComponent implements OnInit {
  keywordThemes: KeywordTheme[] = [];
  selectedKeywordTheme: KeywordTheme | null = null;
  newKeyword: string = '';
  newTheme : string = ''
  error : string = ''

  constructor(private keywordThemesService: ThemesService, private router : Router ) {}

  ngOnInit(): void {
    this.loadThemes()
  }
  
  loadThemes(){
    this.keywordThemesService.getAll().subscribe(keywordThemes => {
      this.keywordThemes = keywordThemes
      console.log(this.keywordThemes)
    });
  }
  selectKeywordTheme(keywordTheme: KeywordTheme): void {
    this.selectedKeywordTheme = keywordTheme;
  }
  deleteTheme(keywordTheme: KeywordTheme): void {
    if (!confirm(`Are you sure you want to delete the keyword theme "${keywordTheme.theme}"?`)) {
      return;
    }
    this.keywordThemesService.deleteTheme(keywordTheme._id).subscribe(() => {
      this.keywordThemes = this.keywordThemes.filter(t => t !== keywordTheme);
      if (this.selectedKeywordTheme === keywordTheme) {
        this.selectedKeywordTheme = null;
      }
    });
  }
  addTheme(){
    this.keywordThemesService.addTheme(this.newTheme).subscribe();
    setTimeout(()=>{
      this.loadThemes()
    }, 1000)
  
  }
  addKeyword(): void {
    if (!this.selectedKeywordTheme || !this.newKeyword) {
      return;
    }
  
    // Check if the keyword already exists in the theme's keyword list
    const keywordExists = this.selectedKeywordTheme.keywords.includes(this.newKeyword);
    if (keywordExists) {
      this.error = "Keyword already exists in the theme"
      console.log('Keyword already exists in the theme');
      return;
    }
  
    this.keywordThemesService.addKeyword(this.selectedKeywordTheme._id, this.newKeyword).subscribe(response => {
      this.selectedKeywordTheme = response.theme;
      console.log(response)
      this.newKeyword = '';
    });
  }

  deleteKeyword(keyword: string): void {
    if (!this.selectedKeywordTheme) {
      return;
    }
    this.keywordThemesService.deleteKeyword(this.selectedKeywordTheme._id, keyword).subscribe(response => {
      this.selectedKeywordTheme = { ...this.selectedKeywordTheme!, keywords: this.selectedKeywordTheme!.keywords.filter(k => k !== keyword) };
   
    });
  }
  backToThemes(){
    this.selectedKeywordTheme = null
    this.router.navigate(['/keywords'])
  }
}
