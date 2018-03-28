import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {HttpResponse } from '@angular/common/http';
import { Subject } from "rxjs/Subject";

import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

	private apiUrl = 'http://api.steampowered.com/';

	constructor(private http : HttpClient){}

	public getuserstats(obs : Subject<any>,user : number, game : number){
		this.http.get(`http://localhost:3000/getuserstats/?${game}=${user}`,{ observe: 'response' })
		.subscribe(
			(res : any) => {
				obs.next(res.body);
			},
			error => {
				alert("Error API not working");
				obs.next(null);
			}
		);
	};
	
}
