import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PalestraComponent } from './palestra.component';


const routes: Routes = [
  { path: '', component: PalestraComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PalestraRoutingModule {}
