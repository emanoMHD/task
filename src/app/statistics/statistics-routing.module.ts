import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsComponent } from './statistics.component';

export const routes: Routes = [
  { path: '',  component:StatisticsComponent}

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule]

})
export class StatisticsRoutingModule { }
