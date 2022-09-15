import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroCmponenteComponent } from './primeiro-componente/primeiro-componente.componente';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroCmponenteComponent,
    SegundoComponenteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
