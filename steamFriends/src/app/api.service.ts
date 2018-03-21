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
	private httpOptions = {
		headers: new HttpHeaders({'Access-Control-Allow-Origin': 'http://localhost:4200','Content-Type': 'application/json'})
	};

	constructor(private http : HttpClient){}

	public getFriendList(user : number){
		let url = this.apiUrl+`/ISteamUser/GetFriendList/v0001/?key=${this.key}&steamid=${user}&format=json`;
		return this.http
		.get(url,{ observe: 'response' })
		.subscribe(resp => {
			console.log({ ... resp.body });
		});;
	}

	public getOwnedGames(user : number){
		let url = this.apiUrl+`IPlayerService/GetOwnedGames/v0001/?key=${this.key}&steamid=${user}&format=json`;
		return this.http
		.get(url,{ observe: 'response' })
		.subscribe(resp => {
			console.log({ ... resp.body });
		});;
	}

}
