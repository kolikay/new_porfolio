import React from 'react';


const Profile = () => {
    return ( <div>
                    <h2>Profilepage</h2>
            </div> );
}
 
export default Profile;


{/* <div class="container-fluid">
    <h1> Create a new account </h1>

    <h5>{{ feedbk }}</h5>

    <form #userSignupForm='ngForm' novalidate (ngSubmit)='onSubmit()'>

        <div class="form-group">
            <label>Email</label>
            <input required pattern= "^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
            type="email" [class.is-invalid]="email.invalid && email.touched" #email='ngModel' 
            class="form-control" name="email" [(ngModel)]='scrumUserModel.email'>
            <div *ngIf="email.errors && (email.invalid || email.touched)">
                <small class="text-danger" *ngIf="email.errors.required && email.touched ">Email is required</small>
                <small class="text-danger" *ngIf="email.errors.pattern"> Email entered has an invalid pattern</small>
            </div>
            
        </div>

        <div class="form-group">
            <label>Fullname</label>
            <input required type="text" class="form-control" name="fullname" [class.is-invalid]="fullname.invalid && fullname.touched" #fullname='ngModel' [(ngModel)]='scrumUserModel.fullname'>
            <small [class.d-none]="fullname.valid || fullname.untouched" class="text-danger" >
                Fullname is required</small>
        </div>

        <div class="form-group">
            <label>Password</label>
            <input required  pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#-_?&])[A-Za-z\d$@$!%*#-_?&]{8,}$"
             #password='ngModel' [class.is-invalid]="password.invalid && password.touched" type="Password" 
             class="form-control" name="password" [(ngModel)]='scrumUserModel.password'>
            <div *ngIf="password.invalid && password.touched">
                <small class="text-danger" *ngIf="password.errors.required">password is required</small>
                <small class="text-danger" *ngIf="password.errors.pattern">
                    password must contains at least 8 characters, one special character, and a number.</small>
            </div>
        </div>


        <div class="form-group">
            <label>User Types</label>
            <select required class="custom-select" name="usertype" [(ngModel)]='scrumUserModel.usertype'#usertype='ngModel'
            [class.is-invalid]="usertype.invalid && usertype.touched">
            <option value=""></option>
            <option *ngFor='let type of userTypes'>{{ type }}</option></select>
            <div *ngIf="usertype.errors && usertype.touched">
                <small class="text-danger" *ngIf="usertype.errors.required && usertype.touched ">User Types is required</small>
            </div>
        
        
        </div>
        <button class="btn btn-primary">Create User</button>
    </form>
</div> */}