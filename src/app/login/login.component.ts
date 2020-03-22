import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  readonly minUsernameLength = 5;
  readonly minPasswordLength = 5;
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.minLength(this.minUsernameLength), Validators.required]),
    password: new FormControl('', [Validators.minLength(this.minPasswordLength), Validators.required])
  });

  constructor(private readonly authService: AuthService) { }

  ngOnInit(): void {}

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe();
  }
}
