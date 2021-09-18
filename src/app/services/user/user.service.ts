import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import creds from '../../../assets/jsons/user_data.json';
import { Observable, observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	creds: { username: string, password: string } = creds;
	endpointConfig: any;
	
	constructor(private httpClient:HttpClient) {	}

	getList(){
		return this.httpClient.get('https://randomuser.me/api/0.8/?results=20');
	}
}
