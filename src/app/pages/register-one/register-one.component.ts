import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-one',
  templateUrl: './register-one.component.html',
  styleUrls: ['./register-one.component.css']
})
export class RegisterOneComponent implements OnInit {
  cards = [{
    text:
    'Join as a client, posting for Jobs',
    use: 'client'
    
  },
    {
      text:
    'Join as a Service Provider,bidding or sending quotation for jobs',
    use: 'serviceProvider'
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
