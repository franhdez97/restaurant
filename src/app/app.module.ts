import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ListaPlatilloComponent } from './components/platillos/lista-platillo/lista-platillo.component';
import { DetallePlatilloComponent } from './components/platillos/detalle-platillo/detalle-platillo.component';
import { ItemPlatilloComponent } from './components/platillos/item-platillo/item-platillo.component';
import { HomeComponent } from './components/home/home.component';
import { PayComponent } from './components/pay/pay.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Alertas
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Paginacion
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { FormsModule } from '@angular/forms';

// Para el spinner
import { SpinnerModule } from './shared/spinner/spinner.module';
import { SpinnerInterceptor } from './shared/interceptors/spinner.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListaPlatilloComponent,
    DetallePlatilloComponent,
    ItemPlatilloComponent,
    HomeComponent,
    PayComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FormsModule,
    SpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
