import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.css'],
})
export class RegisterCardComponent implements OnInit {
  @Input() myCard = {
    text: '',
    use: ''
  } 
  @Output() titleEvent = new EventEmitter();
  constructor(private router: Router) {}

  ngOnInit(): void {}

  fetchUse(val: string) {
    this.titleEvent.emit(val);
    console.log(val);
    this.router.navigateByUrl('/register-two')
  }
}
