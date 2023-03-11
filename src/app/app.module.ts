import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {NbButtonModule, NbCardModule, NbInputModule, NbLayoutModule, NbThemeModule} from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EstadoComponent } from './estado/estado.component';

@NgModule({
  declarations: [
    AppComponent,
    EstadoComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NbThemeModule.forRoot({name: 'default'}),
        NbLayoutModule,
        NbEvaIconsModule,
        NbInputModule,
        NbButtonModule,
        FormsModule,
        BrowserAnimationsModule,
        NbCardModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
