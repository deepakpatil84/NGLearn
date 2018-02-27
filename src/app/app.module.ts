import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {HostBNLComponent } from './pages/host-bnl/component';
import StructuralComponent from './pages/structural/component';
import {AppCustomDirective} from './pages/structural/custom.directive/custom.directive';
import {MyPipe} from './pages/structural/my.pipe';
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
  exports: [ RouterModule ],
  declarations: [
    AppComponent,
    HostBNLComponent,
    StructuralComponent,
    FormsComponent,
    AppCustomDirective,
    MyPipe
  ],
  imports: [
    BrowserModule,    
    FormsModule,    
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
