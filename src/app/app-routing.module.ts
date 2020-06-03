import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosListComponent } from './todos/todos-list/todos-list.component';
import { AddEditTodoComponent } from './todos/add-edit-todo/add-edit-todo.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { FirstComponent } from './rest-data/first/first.component'
const routes: Routes = [
  { path: 'todos', component:TodosListComponent},
  { path:'add-edit', component:AddEditTodoComponent},
  { path:'first', component:FirstComponent },
  { path:'', redirectTo:'todos', pathMatch:'full'},
  { path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
