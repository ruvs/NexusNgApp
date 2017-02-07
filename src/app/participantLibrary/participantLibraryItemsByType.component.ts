import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ng2-bootstrap';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { ItemsService } from '../shared/utils/items.service';
import { NotificationService } from '../shared/utils/notification.service';
import { ConfigService } from './config.service';

import { IParticipantLibraryItem } from './participantLibraryItem';
import { IParticipantLibraryItemType } from './participantLibraryItemType';
import { ParticipantLibraryService } from './participantLibrary.service';

@Component({
    selector: 'participantLibraryItemsByType',
    templateUrl: '../participantLibrary/participantLibraryItemsByType.component.html',
})
export class ParticipantLibraryItemsByTypeComponent implements OnInit {
    @Input('typeKey') participantLibraryTypeKey: string;
    @Input('showFlags') showFlags: boolean;
    @Output() onEditPliClicked = new EventEmitter<string>();

    participantLibraryItemTypes: IParticipantLibraryItemType[];

    participantLibraryItems: IParticipantLibraryItem[];

    constructor(private router: Router,
        private _participantLibraryService: ParticipantLibraryService,
        private itemsService: ItemsService,
        private notificationService: NotificationService,
        private configService: ConfigService,
        private loadingBarService: SlimLoadingBarService
        ) {

    }

    getParticipantsByType() {
        this._participantLibraryService.getParticipantLibraryItemsByType(this.participantLibraryTypeKey)
            .subscribe(
            pli => this.participantLibraryItems = pli);
    }


    viewParticipantLibraryItemDetails(pliKey: string) {
        this.onEditPliClicked.emit(pliKey);
    }

    ngOnInit(): void {
        this.getParticipantsByType();
    }
}
