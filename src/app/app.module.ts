import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CounterComponent } from './counters/counter/counter.component';
import { WrongAddressComponent } from './wrong-address/wrong-address.component';
import { CountersComponent } from './counters/counters.component';
import { HighlightDirective } from './shared/highlight.directive';

const appRoutes: Routes = [
  { path: 'wrong-address', component: WrongAddressComponent},
  { path: ':start', component: CountersComponent},
  { path: '**', component: WrongAddressComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    WrongAddressComponent,
    CountersComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
