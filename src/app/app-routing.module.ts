import { AddEventComponent } from './modules/event/components/add-event/add-event.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './modules/event/components/event/event.component';
import { EventsComponent } from './modules/event/components/events/events.component';

const routes: Routes = [
  {path: 'events', component: EventsComponent},
  {path: 'event/view/:eventId', component: EventComponent},
  {path: 'event/add', component: AddEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
