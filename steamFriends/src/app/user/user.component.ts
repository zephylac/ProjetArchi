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
	disabled = true;

	@Input()
	user : User;

	constructor(private api : ApiService) {}

	private test(){
		let subject = new Subject<any>();
		let obs = subject.asObservable()

		console.log(this.user.steamId);
		this.myData = this.api.getuserstats(subject,this.user.steamId,730);

		obs.subscribe((value) => {
			console.log("Subscription got", value);
			this.myData = value;
		});
	}

	ngOnInit() {
	}

	ngOnChanges(changes : SimpleChanges){
		if (changes.user != undefined){
			this.disabled = false;
			//this.showProfile();
		}
	}
}
