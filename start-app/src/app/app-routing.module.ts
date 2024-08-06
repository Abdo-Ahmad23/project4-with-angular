import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { ServicesComponent } from './main/services/services.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { PricingComponent } from './main/pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"about",component:AboutComponent},
  {path:"home",component:HomeComponent},
  {path:"services",component:ServicesComponent},
  {path:"portfolio",component:PortfolioComponent},
  {path:"pricing",component:PricingComponent},
  {path:"contact",component:ContactComponent},
  {path:"**",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
