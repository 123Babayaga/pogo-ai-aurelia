import { EventAggregator } from 'aurelia-event-aggregator';
import { autoinject } from 'aurelia-framework';

@autoinject
export class OfficeVisitsDetail {
    static inject = [EventAggregator];
  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
    this.visits = [
      {
        date: '01/15/2025',
        time: '9:00 AM',
        status: 'Scheduled'
      },
      {
        date: '01/18/2025',
        time: '2:30 PM',
        status: 'Completed'
      },
      {
        date: '01/22/2025',
        time: '11:15 AM',
        status: 'Scheduled'
      },
      {
        date: '01/25/2025',
        time: '3:45 PM',
        status: 'Pending'
      }
    ];
  }

  closeDetail() {
    this.eventAggregator.publish('close-detail');
  }

  showMoreDetails(event) {
    event.preventDefault();
    console.log('Show more details clicked');
    // Add logic to show additional details
  }

  openVisit() {
    console.log('Opening visit...');
    // Add logic to open visit
  }

  addToDashboard() {
    console.log('Adding to dashboard...');
    // Add logic to add to dashboard
  }

  closeExpanded() {
    this.isVisible = false;
    // You can also publish an event to notify parent components
    this.eventAggregator.publish('expanded-view-closed');
  }

  
}
