import { Component, OnInit  } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showContent: boolean = true;

  constructor(private router: Router) {}
 
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showContent = !['/login', '/signup', '/aiml', '/web-app'].includes(event.url);
      }
    });
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  navigateToSignup(): void {
    this.router.navigate(['/signup']);
  }

  navigateToAiml():void{
    this.router.navigate(['/aiml']);
  }

  navigateToWebapp():void{
    this.router.navigate(['/web-app']);
  }
}
