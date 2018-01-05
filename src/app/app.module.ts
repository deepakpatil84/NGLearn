import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {HostBNLComponent } from './pages/host-bnl/component';
import {NestedRoutesModule} from './pages/nested-routes/module';
import StructuralComponent from './pages/structural/component';
import {FormsComponent} from './pages/forms/forms.component';
console.log('For',FormsComponent,StructuralComponent);


const routes: Routes = [  
  { path: 'host-bnl', component: HostBNLComponent },
  { path: 'structural', component: StructuralComponent },
  { path: 'forms', component: FormsComponent },
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
    HostBNLComponent,
    StructuralComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,    
    FormsModule,    
    NestedRoutesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
