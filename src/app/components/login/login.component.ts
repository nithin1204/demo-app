import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	username = new FormControl();
	password = new FormControl();

	constructor(private userService: UserService, private router: Router) { }

	ngOnInit(): void {
	}

	loginClick(): void {
		try {
			if (this.username.value === this.userService.creds.username && this.password.value === this.userService.creds.password) {
				this.router.navigate(['/home']);
			} else {
				alert('try again!!!');
				return;
			}
		} catch (e) {
			console.log('something went wrong!!', e)
		}
	}
}
