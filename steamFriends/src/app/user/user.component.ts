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
	private myData: any;
	user: User = {
	steamId: 76561198109028354,
	name: 'zephylac'
	};

	constructor(private api : ApiService) {
		let a = this.api.getuserstats(this.user.steamId,730);
		//a.subscribe(resp => console.log({ ... resp.body}))
		a.subscribe(
        (res : any) => {
           this.myData = res.body;
					 console.log("ok");
					 console.log(this.myData);
					 console.log("ok2");
        },
        error => {
          alert("ERROR");
        }
    );

	}

	ngOnInit() {
	}
}
