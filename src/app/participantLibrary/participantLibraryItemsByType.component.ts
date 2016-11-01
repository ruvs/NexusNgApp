﻿import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IParticipantLibraryItem } from './participantLibraryItem';
import { IParticipantLibraryItemType } from './participantLibraryItemType';
import { ParticipantLibraryService } from './participantLibrary.service';

@Component({
    selector: 'participantLibraryItemsByType',
    templateUrl: '../participantLibrary/participantLibraryItemsByType.component.html',
})
export class ParticipantLibraryItemsByTypeComponent implements OnInit {
    @Input('typeKey') participantLibraryTypeKey: string;

    pageTitle: string = 'Participant Library List';
    errorMessage: string;
    participantLibraryItems: IParticipantLibraryItem[];

    constructor(private router: Router,
        private _participantLibraryService: ParticipantLibraryService) {

    }

    getParticipantsByType() {
        this._participantLibraryService.getParticipantLibraryItemsByType(this.participantLibraryTypeKey)
            .subscribe(
            pli => this.participantLibraryItems = pli,
            error => this.errorMessage = <any>error);
    }

    ngOnInit(): void {
        this.getParticipantsByType();
    }
}
