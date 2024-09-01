import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-tasks';
  currentLanguage='ar'
  dirApp='rtl';
  constructor(
    private translateService:TranslateService
     ){}
  ngOnInit(): void {
 this.translateService.use(this.currentLanguage);
 document.documentElement.lang = this.currentLanguage

  if (this.currentLanguage=='en') { this.dirApp = 'ltr'; } else { this.dirApp = 'rtl'; }
document.dir = this.dirApp;
 document.documentElement.lang = this.currentLanguage

  }
}
