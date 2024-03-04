import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ManComponent } from './pages/man/man.component';
import { WomanComponent } from './pages/woman/woman.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ClientComponent } from './components/layouts/client/client.component';
import { AdminComponent } from './components/layouts/admin/admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductComponent } from './pages/admin/product/product.component';

export const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'man', component: ManComponent },
      { path: 'woman', component: WomanComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'product', component: ProductComponent },
    ],
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppModule {}
