import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent} from './app/app/app.component';
import { appConfig } from './app/app/app.config';
import { routes } from './app/app/app.routes';
import { provideRouter } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app/app.module';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error)