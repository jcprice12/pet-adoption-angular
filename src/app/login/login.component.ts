import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.minLength(5), Validators.required]),
    password: new FormControl('', [Validators.minLength(5), Validators.required])
  });

  constructor(private readonly authService: AuthService) { }

  ngOnInit(): void {}

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe();
  }
}
