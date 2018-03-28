import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { User } from '../user';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs/Observable';
import {HttpResponse } from '@angular/common/http';
import { Subject } from "rxjs/Subject";

import 'rxjs/add/operator/map';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	private apiUrl = 'http://api.steampowered.com/';
	private myData: any;
	user: User = {
	steamId: 76561198109028354,
	name: 'zephylac'
	};

	constructor(private api : ApiService) {
		let subject = new Subject<any>();
		let obs = subject.asObservable()

		this.myData = this.api.getuserstats(subject,this.user.steamId,730);

		obs.subscribe((value) => {
			console.log("Subscription got", value);
			this.myData = value;
		});
	}

	ngOnInit() {
	}
}
