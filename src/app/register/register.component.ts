import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUpForm = new FormGroup({
    username: new FormControl('', [Validators.minLength(5), Validators.minLength(5)]),
    passwords: new FormGroup({
      password: new FormControl('', [Validators.minLength(5), Validators.minLength(5)]),
      confirmPassword: new FormControl('', [Validators.minLength(5), Validators.minLength(5)])
    }, this.checkPasswordsMatch)
  });

  constructor(private readonly authService: AuthService) { }

  ngOnInit(): void { }

  onSubmit() {
    this.authService.register({
      username: this.signUpForm.value.username,
      password: this.signUpForm.value.passwords.password
    }).subscribe();
  }

  private checkPasswordsMatch(passwordsFormGroup: FormGroup): ValidationErrors | null {
    return passwordsFormGroup.value.password === passwordsFormGroup.value.confirmPassword ? null : {
      passwordsDoNotMatch: true
    }
  }
}
