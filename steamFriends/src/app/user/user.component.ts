import { Component, OnInit, OnChanges, Input , SimpleChanges} from '@angular/core';
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
	private myData: any;
	private profile : any;
	private disabled :boolean = true;

	@Input()
	user : User;

	constructor(private api : ApiService) {
		this.disabled = true;
	}

	private test(){
		let subject = new Subject<any>();
		let obs = subject.asObservable()

		console.log(this.user.steamId);
		this.api.getuserstats(subject,this.user.steamId,730);

		obs.subscribe((value) => {
			console.log("Subscription got", value);
			this.myData = value;
		});
	}

	private showProfile(){
		let subject = new Subject<any>();
		let obs = subject.asObservable()

		this.api.getPlayerProfile(subject,this.user.steamId);

		obs.subscribe((value) => {
			console.log("Subscription got", value);
			this.profile = value.response.players[0];
		});


	}


	ngOnInit() {
	}

	ngOnChanges(changes : SimpleChanges){
		if (changes.user != undefined){
			if(changes.user.currentValue != undefined){
			console.log(changes);
			this.disabled = false;
			this.showProfile();
			}

		}
	}
}
