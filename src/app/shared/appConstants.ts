import { Injectable } from '@angular/core';

@Injectable()
export class AppConstants {

    _signalrUrl: string;
    _signalrHubName: string;

    constructor() {
        this._signalrUrl = "http://localhost:8123/signalr/hubs/";
        this._signalrHubName = "BroadcasterHub";
    }

    getSignalrUri() {
        return this._signalrUrl;
    }

    getBaseSignalrUri() {
        return this._signalrUrl.replace('signalr/hubs//', '');
    }

    getSignalrHubName() {
        return this._signalrHubName;
    }
}
