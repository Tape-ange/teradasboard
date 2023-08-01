import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { LayoutModule } from './layout/layout.module';
import { SuccessDialogComponent } from './util/dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './util/dialogs/error-dialog/error-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SuccessDialogComponent,
    ErrorDialogComponent,
 
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
