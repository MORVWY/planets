import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {PrimaryMainComponent} from "./components/planets/primary-main/primary-main.component";
import {PrimaryPlanetComponent} from "./components/planets/primary-main/primary-planet/primary-planet.component";
import {ErrorPageComponent} from "./components/error-page/error-page.component";

const routes: Routes = [
  {path: '', title: 'Solar System ', component: MainPageComponent},
  {path: 'primary', title: 'Primary Planets', component: PrimaryMainComponent},
  {path: 'primary/:id', title: 'Planet', component: PrimaryPlanetComponent},
  {path: 'error', title: 'Missing Page', component: ErrorPageComponent},
  {path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
