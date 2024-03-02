import { AfterViewInit, Component,OnInit } from '@angular/core';
declare var particlesJS: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'chatapp';
 
   
  ngOnInit(): void {

    // particlesJS.load('particles-js', 'assets/particles.json', null);
    
    }
    ngAfterViewInit() {
      this.initParticles();
    }
    private initParticles() {
      particlesJS.load('particles-js', 'assets/particles.json', function() {
        console.log('Particles loaded...');
      });
    }
}
