import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { TranslateLoader, TranslateModule, TranslatePipe, TranslateService, TranslateStore } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
   
       BrowserModule, AppRoutingModule,SharedModule,CoreModule,CommonModule,BrowserAnimationsModule,
       TranslateModule.forRoot({
         defaultLanguage: 'ar',
   
         loader: {
             provide: TranslateLoader,
             useFactory: HttpLoaderFactory,
             deps: [HttpClient]
         }
     })
     ],
     exports:[ ],
     providers: [ TranslateService, TranslateStore ,TranslatePipe],
     
     bootstrap: [AppComponent]
   })
   export class AppModule { }
   