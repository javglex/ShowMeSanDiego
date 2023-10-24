import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';
import { bootstrapApplication, provideProtractorTestingSupport } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import {provideAnimations} from "@angular/platform-browser/animations";


bootstrapApplication(AppComponent,
  {
    providers: [
    provideProtractorTestingSupport(),
    provideRouter(routeConfig),
    provideAnimations(),
    provideAnimations()
]
  }
).catch(err => console.error(err));
