import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

//import './shared/rxjs-operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/do';
//import 'rxjs/add/observable/throw';

import { IParticipantLibraryItem, IParticipantLibraryItemDetails } from './participantLibraryItem';
import { IParticipantLibraryItemType } from './participantLibraryItemType';
import { ConfigService } from '../shared/utils/config.service';

@Injectable()
export class ParticipantLibraryService {
    private _participantLibraryItems;
    private _participantLibraryItemTypes;
    private _participantLibraryItemsByType;
    private _participantLibraryItem;
    private _participantLibraryItemAdd;

    private options: RequestOptions;
    
    constructor(
        private _http: Http,
        private _configService: ConfigService)
    {
        this._participantLibraryItemTypes = _configService.getApiUri()      + 'participantLibrary/participants/types';
        this._participantLibraryItems = _configService.getApiUri()          + 'participantLibrary/participants';
        this._participantLibraryItemsByType = _configService.getApiUri()    + 'participantLibrary/participants/byType/';
        this._participantLibraryItem = _configService.getApiUri() + 'participantLibrary/participants/';
        this._participantLibraryItemAdd = _configService.getApiUri()        + 'participantLibrary/participants/save';

        let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
        this.options = new RequestOptions({ headers: headers }); // Create a request option
    }

    getParticipantLibraryItems(): Observable<IParticipantLibraryItem[]> {
        return this._http.get(this._participantLibraryItems)
            .map((response: Response) => <IParticipantLibraryItem[]>response.json())
            //.do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getParticipantLibraryItem(key: string): Observable<IParticipantLibraryItem> {
        return this._http.get(this._participantLibraryItem + key)
            .map((response: Response) => <IParticipantLibraryItem>response.json())
            //.do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getParticipantLibraryItemDetails(key: string): Observable<IParticipantLibraryItemDetails> {
        return this._http.get(this._participantLibraryItem + key + '/details')
            .map((response: Response) => <IParticipantLibraryItem>response.json())
            //.do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getParticipantLibraryItemTypes(): Observable<IParticipantLibraryItemType[]> {
        return this._http.get(this._participantLibraryItemTypes)
            .map((response: Response) => <IParticipantLibraryItemType[]>response.json())
            //.do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getParticipantLibraryItemsByType(typeKey: string): Observable<IParticipantLibraryItem[]> {
        return this._http.get(this._participantLibraryItemsByType + typeKey)
            .map((response: Response) => <IParticipantLibraryItem[]>response.json())
            //.do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    saveParticipantLibraryItem(data) {
        return this._http.post(this._participantLibraryItemAdd, JSON.stringify(data), this.options)
            .map((response: Response) => this.extractData)
            //.do(data => console.log('All: ' + data))
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: any) {
        var applicationError = error.headers.get('Application-Error');
        var serverError = error.json();
        var modelStateErrors: string = '';

        if (!serverError.type) {
            console.log(serverError);
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }

        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;

        return Observable.throw(applicationError || modelStateErrors || 'Server error');
    }

    //private handleError(error: Response) {
    //    // in a real world app, we may send the server to some remote logging infrastructure
    //    // instead of just logging it to the console
    //    //console.error(error);
    //    return Observable.throw(error.json().error || 'Server error');
    //}
} 