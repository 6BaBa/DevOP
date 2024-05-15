import { JobComponent } from './pages/job/job.component';
import { LoginTwoComponent } from './pages/login-two/login-two.component';
import { LoginOneComponent } from './pages/login-one/login-one.component';
import { RegisterTwoComponent } from './pages/register-two/register-two.component';
import { RegisterOneComponent } from './pages/register-one/register-one.component';
import { PostAdComponent } from './pages/post-ad/post-ad.component';
import { AdDetailComponent } from './pages/ad-detail/ad-detail.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
import { PostJobComponent } from './pages/post-job/post-job.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SearchComponent } from './pages/search/search.component';
import { AdsComponent } from './pages/ads/ads.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';

const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'blog', component: BlogComponent},
{path: 'blog-detail', component: BlogDetailComponent},
{path: 'ad-detail', component: AdDetailComponent},
{path: 'dashboard', component: DashboardComponent},
{path: 'job', component: JobComponent},
{path: 'ads', component: AdsComponent},
{path: 'job-detail', component: JobDetailComponent},
{path: 'post-ad', component: PostAdComponent},
{path: 'post-job', component: PostJobComponent},
{path: 'register-one', component: RegisterOneComponent},
{path: 'register-two', component: RegisterTwoComponent},
{path: 'login', component: LoginOneComponent},
{path: 'login-2', component: LoginTwoComponent},
{path: 'landing', component: LandingComponent},
{path: 'search', component: SearchComponent},
{path: '', redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
