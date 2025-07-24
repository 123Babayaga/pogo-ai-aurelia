import { EventAggregator } from 'aurelia-event-aggregator';
import { autoinject, bindable } from 'aurelia-framework';

@autoinject
export class ChatbotOverlay {
  static inject = [EventAggregator];
  @bindable isOpen;
  @bindable showMainView;
  @bindable showExpandedView;
  @bindable showDetailView;
  @bindable currentDetail;
  @bindable onClose;
  
  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
  }

  closeOverlay() {
    if (this.onClose) {
      this.onClose();
    }
  }

  handleBackdropClick(event) {
    // Close if clicking on backdrop (not the modal content)
    if (event.target === event.currentTarget) {
      this.closeOverlay();
    }
  }
}
