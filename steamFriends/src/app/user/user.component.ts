import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { User } from '../user';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	private apiUrl = 'http://api.steampowered.com/';
	data : any = {};

	user: User = {
	steamId: 76561198109028354,
	name: 'zephylac'
	};

	constructor(private api : ApiService) {
		let a = this.api.getFriendList(this.user.steamId);
		console.log(a);

		a = this.api.getOwnedGames(this.user.steamId);
		console.log(a);
	}

	ngOnInit() {
	}
}
