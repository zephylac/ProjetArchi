import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

	private apiUrl = 'http://api.steampowered.com/';
	private key = '';


	constructor(private http : HttpClient){}

	public getuserstats(user : number, game : number){
		return this.http.get(`http://localhost:3000/getuserstats/?${game}=${user}`,{ observe: 'response' });
	};
}
