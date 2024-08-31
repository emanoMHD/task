import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {MatSelectModule} from '@angular/material/select';


export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,TranslateModule,
    MatSelectModule,CommonModule

  ],
  exports:[FormsModule,ReactiveFormsModule,TranslateModule,    MatSelectModule,CommonModule,
 ],
  providers:[TranslateService]
})
export class SharedModule { }
