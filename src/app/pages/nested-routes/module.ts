import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NestedRoutesComponent } from './component';
import { Page1 } from './page1/page1';
import { Child } from './page1/child';
import { TestDirective} from './page1/test.directive/test.directive'
import { Page2 } from './page2';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: NestedRoutesComponent,
    children:[
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'page1'
      },
      {
        path: 'page1',
        component: Page1
      },
      {
        path: 'page2',
        component: Page2
      }
    ]    
  }    
]

@NgModule({
  imports: [RouterModule.forChild(routes),FormsModule],
  exports: [RouterModule],
  providers: [],
  declarations: [NestedRoutesComponent, Page1, Page2, Child, TestDirective]
})
export class NestedRoutesModule {}