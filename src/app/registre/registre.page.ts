import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { userInfo } from 'os';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.page.html',
  styleUrls: ['./registre.page.scss'],
})
export class RegistrePage implements OnInit {
  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private fire: AngularFireAuth,private router: Router) { }

  ngOnInit() {
  }
  ionViewDidload() {
    console.log('ionViewDidload RegisterPage');
  }
registerUser() {
  this.fire.auth.createUserWithEmailAndPassword(this.user.value,this.password.value)

  .then(data => {
  console.log(' got data', data)
  })
  .catch(error => {
  console.log('got an error', error);
  });
  this.router.navigate(['home']);
  console.log('would register user with',this.user.value,this.password.value);
}

}
