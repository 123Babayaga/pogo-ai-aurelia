import { EventAggregator } from 'aurelia-event-aggregator';
import { autoinject } from 'aurelia-framework';

@autoinject
export class ChatInput {
    static inject = [Element, EventAggregator];  // Add Element injection

    constructor(element, eventAggregator) {
        this.element = element;  // Store element reference
        this.eventAggregator = eventAggregator;
        this.chatText = '';
        this.isRecording = false;
        this.waveformInterval = null;
    }

    attached() {
        this.waveBars = this.element.querySelectorAll('.wave-bar');
    }

    toggleRecording() {
        this.isRecording = !this.isRecording;

        if (this.isRecording) {
            this.startWaveformAnimation();
        } else {
            this.stopWaveformAnimation();
        }
    }

    startWaveformAnimation() {
        if (this.waveBars) {
            this.waveformInterval = setInterval(() => {
                this.waveBars.forEach(bar => {
                    const height = Math.floor(Math.random() * 16) + 4;
                    bar.style.height = height + 'px';
                });
            }, 150);
        }
    }

    stopWaveformAnimation() {
        if (this.waveformInterval) {
            clearInterval(this.waveformInterval);
            this.waveformInterval = null;
        }
    }

    onTranscribeClick() {
        console.log('Transcribe clicked');
        // Add transcription logic here
    }

    sendMessage() {
        if (this.chatText.trim()) {
            console.log('Sending message:', this.chatText);
            this.eventAggregator.publish('message-sent', { message: this.chatText });
            this.chatText = '';
        }
    }

    handleKeyPress(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            this.sendMessage();
            return false;
        }
        return true;
    }

    detached() {
        this.stopWaveformAnimation();
    }
}
