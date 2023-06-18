import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
// import { RouteGuardService } from './service/route-guard.service'; // deprecated use function instead
import { routeGuard } from './guardsfn/route.guard';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'welcome/:name',
    component: WelcomeComponent,
    canActivate: [routeGuard],
  },
  {
    path: 'todos',
    component: ListTodosComponent,
    canActivate: [routeGuard],
  },
  {
    path: 'todos/:id',
    component: TodoComponent,
    canActivate: [routeGuard],
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
