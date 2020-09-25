// Framework imports
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Project spesific importss
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AppComponent } from './app.component';
import { NewsService, NotifService } from '@services';

/* Project Sites */
import {
    NewsListComponent,
    ArticleComponent
} from '@site';

/* Project Inserts */
import {
    NewsItemComponent,
    NotifComponent,
    HeaderComponent
} from '@insert';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsItemComponent,
    ArticleComponent,
    NotifComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    NewsService,
    NotifService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
