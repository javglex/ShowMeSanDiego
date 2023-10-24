import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { OnboardingComponent } from "./onboarding/onboarding.component";
import { SearchComponent } from "./search/search.component";
import {NewPostComponent} from "./new-post/new-post.component";
import {PreviewPostComponent} from "./preview-post/preview-post.component";

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Event Details'
  },
  {
    path:'onboarding',
    component: OnboardingComponent,
    title:'Welcome To San Diego'
  },
  {
    path:'search',
    component: SearchComponent,
    title:'Find Your Event'
  },
  {
    path:'new-post',
    component: NewPostComponent,
    title:'Post Your Event'
  },
  {
    path:'preview-post/:id',
    component: DetailsComponent,
    title:'Review Your Event'
  }
];

export default routeConfig;
