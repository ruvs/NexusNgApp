import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

    _apiUri: string;

    constructor() {
        this._apiUri = 'http://localhost:5793/api/';
    }

    getApiUri() {
        return this._apiUri;
    }

    getApiHost() {
        return this._apiUri.replace('api/', '');
    }
}