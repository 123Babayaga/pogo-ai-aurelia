import { EventAggregator } from 'aurelia-event-aggregator';
import { autoinject } from 'aurelia-framework';

@autoinject
export class FloatingChatbot {
  static inject = [EventAggregator];
  
  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
    this.isOpen = false;
    this.showMainView = true;
    this.showExpandedView = false;
    this.selectedAction = '';
    this.showDetailView = false;
    this.currentDetail = '';
    
    this.setupEventListeners();
  }

  setupEventListeners() {
    this.eventAggregator.subscribe('action-selected', (data) => {
      this.handleAction(data.action);
    });

    this.eventAggregator.subscribe('close-detail', () => {
      this.closeDetail();
    });
  }

  toggleChatbot() {
    this.isOpen = !this.isOpen;
  }

  closeChatbot() {
    this.isOpen = false;
    this.resetViews();
  }

  handleAction(action) {
    this.selectedAction = action;
    
    if (action === 'office-visits') {
      this.showMainView = false;
      this.showExpandedView = true;
    } else {
      this.showDetailView = true;
      this.currentDetail = action;
    }
  }

  closeDetail() {
    this.showDetailView = false;
    this.showExpandedView = false;
    this.showMainView = true;
    this.selectedAction = '';
    this.currentDetail = '';
  }

  resetViews() {
    this.showMainView = true;
    this.showExpandedView = false;
    this.showDetailView = false;
    this.selectedAction = '';
    this.currentDetail = '';
  }
}
