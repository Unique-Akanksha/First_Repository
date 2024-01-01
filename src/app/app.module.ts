// aimport { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { ArticlesModule } from './articles/articles.module';
import { StaticpagesRoutingModule } from './staticpages/staticpages-routing.module';
import { AccountRoutingModule } from './account/account-routing.module';
import { AccountserviceService } from './account/accountservice.service';
import { AccountModule } from './account/account.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PagenotfoundComponent,
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule,
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    ArticlesModule,
    StaticpagesRoutingModule,
    AppRoutingModule,
    AccountRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AccountModule,
  ],
  providers: [AccountserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
