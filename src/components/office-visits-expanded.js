import { EventAggregator } from 'aurelia-event-aggregator';
import { autoinject } from 'aurelia-framework';

@autoinject
export class OfficeVisitsExpanded {
    static inject = [EventAggregator];
  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
    this.chatMessages = [];
    
    this.setupEventListeners();
  }

  setupEventListeners() {
    this.eventAggregator.subscribe('message-sent', (data) => {
      this.chatMessages.push({
        type: 'user',
        content: data.message
      });
      
      // Simulate assistant response
      setTimeout(() => {
        this.chatMessages.push({
          type: 'assistant',
          content: 'I can help you with that request.'
        });
      }, 1000);
    });
  }
}
