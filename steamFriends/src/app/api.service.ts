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

	public getName(obs : Subject<any>,user : number,index : number){
		this.http.get(`http://localhost:3000/getplayersummary/?${user}`,{ observe: 'response' })
		.subscribe(
			(res : any) => {
				obs.next({'res' :res.body.response.players[0].personaname, 'index' : index});
			},
			error => {
				alert("Error API not working");
				obs.next(null);
			}
		);
		};

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

	public getPlayerProfile(obs : Subject<any>,user : number){
		this.http.get(`http://localhost:3000/getplayersummary/?${user}`,{ observe: 'response' })
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

	public getFriendList(obs : Subject<any>,user : number){
		this.http.get(`http://localhost:3000/getfriendlist/?${user}`,{ observe: 'response' })
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

	public getOwnedGames(obs : Subject<any>,user : number){
		this.http.get(`http://localhost:3000/getownedgames/?${user}`,{ observe: 'response' })
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

	public getGameInfo(obs : Subject<any>,appid : number, index : number){
		this.http.get(`http://localhost:3000/getschema/?${appid}`,{ observe: 'response' })
		.subscribe(
			(res : any) => {
				obs.next({'res' : res.body, 'index' : index});
			},
			error => {
				alert("Error API not working");
				obs.next(null);
			}
		);
	};

	public getAppList(obs : Subject<any>){
		this.http.get(`../assets/applist.json`,{ observe: 'response' })
		.subscribe(
			(res : any) => {
				obs.next(res.body);
			}
		);
	};



}
