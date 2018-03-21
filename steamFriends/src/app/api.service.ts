import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

	private apiUrl = 'http://api.steampowered.com/';
	private key = '';
	private httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': 'http://localhost:4200',
			'Access-Control-Allow-Headers':'X-Requested-With,content-type'
		})
};

	constructor(private http : HttpClient){}

	public getFriendList(user : number){
		//let headers = new Headers({ 'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'GET, POST', 'Access-Control-Allow-Headers':'X-Requested-With,content-type','Access-Control-Allow-Credentials': true });
		let url = this.apiUrl+`/ISteamUser/GetFriendList/v1/?key=${this.key}&format=json&steamid=`+user;

		this.http
		.get(url, this.httpOptions)
		 .map((res : Response) => res.json())
		 .subscribe(data => {
			 console.log(data);
		 })
	}
}
