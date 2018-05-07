import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavbarComponent } from './shared/my-navbar/my-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import {StyleManager} from './shared/style-manager/style-manager';
import {ThemeStorage} from './shared/theme-picker/theme-storage/theme-storage';
import {ThemePickerModule} from './shared/theme-picker/theme-picker';


@NgModule({
  declarations: [
    AppComponent,
    MyNavbarComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ThemePickerModule,
  ],
  providers: [
    StyleManager,
    ThemeStorage,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
