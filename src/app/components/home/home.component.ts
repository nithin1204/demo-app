import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserDetailsModel } from 'src/app/models/user-details';
import { UserService } from 'src/app/services/user/user.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	listSubscription: Subscription;
	userList: UserDetailsModel[] = new Array();
	fname:string = '';
	lname:string = '';
	gender:string = '';
	email:string = '';
	username:string = '';
	password:string = '';
	dob:string = '';
	phone:string = '';
	title:string = '';
	titleType:any = [
		{id:1 ,title:"Mr."},
		{id:2 ,title:"Mrs."},
		{id:3 ,title:"Ms."}
	]
	dataSource:any;

	constructor(private userService: UserService) { }

	ngOnInit(): void {
		this.title = this.titleType[0].title;
		this.listSubscription = this.userService.getList().pipe().subscribe(o => {
			localStorage.setItem('dataSource', JSON.stringify(o));
			this.dataSource = o;
			this.userList = o['results'].map(item=>item.user);
		//	console.log('ooooooo ', o)
		});
	}

	addUser(): void {
		const formData = {
			"name": { 
				"title": this.title, 
				"first": this.fname, 
				"last": this.lname 
			},
			"dob": this.dob,
			"phone": this.phone,
			"username": this.username,
			"password": this.password,
			"gender":this.gender
		};
		this.dataSource.results[this.dataSource.results.length] = {
			'user':{}
		};
		let t = this.dataSource.results[this.dataSource.results.length-1].user;
		for(let key in formData) {
			t[key] = formData[key];
		}
		localStorage.setItem('dataSource',JSON.stringify(this.dataSource));
		this.userList = this.dataSource.results.map(item=> item.user);
	}

	ngOnDestroy(): void {
		this.listSubscription.unsubscribe();
		localStorage.clear();
	}

}
