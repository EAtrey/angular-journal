import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './components/event/event.component';
import { EventsComponent } from './components/events/events.component';
import { AddEventComponent } from './components/add-event/add-event.component';

@NgModule({
  declarations: [EventComponent, EventsComponent, AddEventComponent],
  imports: [
    CommonModule
  ]
})
export class EventModule { }
