import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {HostBNLComponent } from './pages/host-bnl/component';
import {NestedRoutesModule} from './pages/nested-routes/module'


const routes: Routes = [  
  { path: 'host-bnl', component: HostBNLComponent },
  { path: '', redirectTo: '/host-bnl', pathMatch: 'full' },
  {
    path: 'nested-routes',
    loadChildren:
      'app/pages/nested-routes/module#NestedRoutesModule'
  }
 ];



@NgModule({
  exports: [ RouterModule,NestedRoutesModule ],
  declarations: [
    AppComponent,
    HostBNLComponent
  ],
  imports: [
    BrowserModule,    
    NestedRoutesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
