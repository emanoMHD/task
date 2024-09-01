import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpLoaderFactory, SharedModule } from '../shared/shared.module';
import { StatisticsComponent } from './statistics.component';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { CoreModule } from '../core/core.module';
import { TranslateLoader, TranslateModule, TranslateStore } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [StatisticsComponent],
  imports: [
    CommonModule,SharedModule,StatisticsRoutingModule,CoreModule,

  ],
  providers:[TranslateStore]
})
export class StatisticsModule { }
