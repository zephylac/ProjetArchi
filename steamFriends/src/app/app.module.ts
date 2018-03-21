import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ApiService } from './api.service';


@NgModule({
	declarations: [
		AppComponent,
		UserComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		HttpClientModule
	],
	providers: [AppComponent, ApiService],
	bootstrap: [AppComponent]
})
export class AppModule { }
