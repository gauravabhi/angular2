import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

export const routes:Routes=[
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent}
]

export const routing:ModuleWithProviders=RouterModule.forRoot(routes);