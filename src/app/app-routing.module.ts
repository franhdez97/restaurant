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
    path: 'menu/:category',
    component: ListaPlatilloComponent
  },
  {
    path: 'food-details/:id',
    component: DetallePlatilloComponent
  },
  {
    path: 'pagar',
    component: PayComponent
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
