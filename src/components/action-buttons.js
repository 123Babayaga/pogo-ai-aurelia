import { EventAggregator } from 'aurelia-event-aggregator';
import { autoinject } from 'aurelia-framework';

@autoinject
export class ActionButtons {
   static inject = [EventAggregator];
  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
  }

  selectAction(action) {
    this.eventAggregator.publish('action-selected', { action });
  }
}
