export class UserDetailsModel {
    name?: { title: string, last: string, first: string };
    dob?: number;
    email?: string = '';
    gender?: string = '';
    phone?: string = '';
    picture?: { large?: string, medium?: string, thumbnail?: string };
    constructor() {}
}