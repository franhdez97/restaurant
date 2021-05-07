import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PayComponent } from './components/pay/pay.component';
import { DetallePlatilloComponent } from './components/platillos/detalle-platillo/detalle-platillo.component';
import { ListaPlatilloComponent } from './components/platillos/lista-platillo/lista-platillo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'list/:category',
    component: ListaPlatilloComponent
  },
  {
    path: 'detail-food/:id',
    component: DetallePlatilloComponent
  },
  {
    path: 'pay',
    component: PayComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
