import { PLATFORM } from 'aurelia-pal';

export function configure(config) {
  config.globalResources([
    PLATFORM.moduleName('../components/app-header'),
    PLATFORM.moduleName('../components/action-buttons'),
    PLATFORM.moduleName('../components/detail-view'),
    PLATFORM.moduleName('../components/chat-input'),
    PLATFORM.moduleName('../components/office-visits-expanded'),
    PLATFORM.moduleName('../components/office-visits-detail'),
    PLATFORM.moduleName('../components/floating-chatbot'),
    PLATFORM.moduleName('../components/chatbot-overlay')
  ]);
}