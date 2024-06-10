import { Routes } from '@angular/router';
import { EditComponent } from './pages/products/edit/edit.component';
import { ListComponent } from './pages/products/list/list.component';
import { CreateComponent } from './pages/products/create/create.component';
import { RegisterComponent } from './pages/products/register/register.component';
import { LoginComponent } from './pages/products/login/login.component';

export const routes: Routes = [
    {
        path: 'products/list',
        component: ListComponent,
    }, 
    {
        path: 'products/create',
        component: CreateComponent,
    }, 
    {
        path: 'products/edit/:id',
        component: EditComponent,
    },
    {
        path: 'products/login',
        component: LoginComponent,
    },
    {
        path: 'products/register',
        component: RegisterComponent,
    }, 
];
