import { Component, signal} from '@angular/core';

@Component({
  selector: 'app-forms-with-signals',
  imports: [],
  templateUrl: './forms-with-signals.html',
  styleUrl: './forms-with-signals.css',
})

interface LoginData{
  email: string;
  password: string;
}

const loginModel = signal<LoginData>({
    email: '',
    password: '',
});

const loginForm = form(loginModel);

export class FormsWithSignals {
  
}
