import { Component, OnInit, ViewChild, Input, Output, trigger, state, style, animate, transition } from '@angular/core';
//import { Router, ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ng2-bootstrap';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { ItemsService } from '../shared/utils/items.service';
import { NotificationService } from '../shared/utils/notification.service';
import { ConfigService } from '../shared/utils/config.service';

import { IParticipantLibraryItem } from './participantLibraryItem';
import { IParticipantLibraryItemType } from './participantLibraryItemType';
import { ParticipantLibraryService } from './participantLibrary.service';

@Component({
    selector: 'participantLibraryList',
    templateUrl: '../participantLibrary/participantLibraryList.component.html',
    animations: [
        trigger('flyInOut', [
            state('in', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.5s ease-in')
            ]),
            transition('* => void', [
                animate('0.2s 10 ease-out', style({
                    opacity: 0,
                    transform: 'translateX(100%)'
                }))
            ])
        ])
    ]
})
export class ParticipantLibraryListComponent implements OnInit {

    // Modal properties
    @ViewChild('childModal') public childModal: ModalDirective;
    selectedParticipantLibraryItem: string;
    participantLibraryItemDetails: IParticipantLibraryItem;
    selectedParticipantLibraryItemLoaded: boolean = false;
    //index: number = 0;
    backdropOptions = [true, false, 'static'];
    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;

    participantLibraryItemTypes: IParticipantLibraryItemType[];

    //public itemsPerPage: number = 2;
    //public totalItems: number = 0;
    //public currentPage: number = 1;

    constructor(
        private _participantLibraryService: ParticipantLibraryService,
        private itemsService: ItemsService,
        private notificationService: NotificationService,
        private configService: ConfigService,
        private loadingBarService: SlimLoadingBarService
    ) {
        ////this.newItem = new NewParticipantLibraryItem();
    }

    ngOnInit(): void {
        this.loadParticipantLibraryItemTypes();
    }

    loadParticipantLibraryItemTypes() {
        this.loadingBarService.start();

        this._participantLibraryService.getParticipantLibraryItemTypes()
            .subscribe(plit => {
                this.participantLibraryItemTypes = plit;
                this.loadingBarService.complete();
            },
            error => {
                this.loadingBarService.complete();
                this.notificationService.printErrorMessage('Failed to load partiipant library items. ' + error);
            });
    }

    onEditPliClicked(pliKey: string) {
        this.viewParticipantLibraryItemDetails(pliKey);
    }

    viewParticipantLibraryItemDetails(pliKey: string) {
        this.selectedParticipantLibraryItem = pliKey;

        this._participantLibraryService.getParticipantLibraryItem(pliKey)
            .subscribe((pli: IParticipantLibraryItem) => {
                this.participantLibraryItemDetails = this.itemsService.getSerialized<IParticipantLibraryItem>(pli);
                this.loadingBarService.complete();
                this.selectedParticipantLibraryItemLoaded = true;
                this.childModal.show();//.open('lg');
            },
            error => {
                this.loadingBarService.complete();
                this.notificationService.printErrorMessage('Failed to load participant library item. ' + error);
            });
    }

    ////onSubmit(e): void {
    ////    this._participantLibraryService.saveParticipantLibraryItem(this.newItem)
    ////        .subscribe(data => this.newItemAdded(data),
    ////        error => this.errorMessage = <any>error),
    ////        () => console.log("Finished onSubmit");
    ////}

    ////newItemAdded(theNewItemAdded): void {
    ////    console.log(theNewItemAdded);
    ////    //this.router.navigateByUrl('/participantLibrary');
    ////}

    public hideChildModal(): void {
        this.childModal.hide();
    }
}
