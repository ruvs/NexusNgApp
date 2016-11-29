import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IParticipantLibraryItem } from './participantLibraryItem';
import { IParticipantLibraryItemType } from './participantLibraryItemType';
import { ParticipantLibraryService } from './participantLibrary.service';

declare var jQuery: any;

@Component({
    selector: 'participantLibraryList',
    templateUrl: '../participantLibrary/participantLibraryList.component.html',
})
export class ParticipantLibraryListComponent implements OnInit {
    pageTitle: string = 'Participant Library List';
    errorMessage: string;
    participantLibraryItemTypes: IParticipantLibraryItemType[];

    newItem: NewParticipantLibraryItem;

    constructor(private router: Router,
        private _participantLibraryService: ParticipantLibraryService,
        private _elRef: ElementRef)
    {
        this.newItem = new NewParticipantLibraryItem();
    }

    //getParticipantsByType(typeKey: string) {
    //    this._participantLibraryService.getParticipantLibraryItemsByType(typeKey)
    //        .subscribe(
    //        pli => this.participantLibraryItems = pli,
    //        error => this.errorMessage = <any>error);
    //}

    //getAllParticipants() {
    //    return this._participantLibraryService.getParticipantLibraryItems()
    //        .subscribe(
    //        pli => this.participantLibraryItems = pli,
    //        error => this.errorMessage = <any>error);
    //}

    onSubmit(e): void {
        jQuery(this._elRef.nativeElement).find('#myModal').modal("hide");

        this._participantLibraryService.saveParticipantLibraryItem(this.newItem)
            .subscribe(data => this.newItemAdded(data),
            error => this.errorMessage = <any>error),
            () => console.log("Finished onSubmit");
    }

    ngOnInit(): void {
        this._participantLibraryService.getParticipantLibraryItemTypes()
            .subscribe(
            plit => this.participantLibraryItemTypes = plit,
            error => this.errorMessage = <any>error);
    }

    newItemAdded(theNewItemAdded): void {
        console.log(theNewItemAdded);
        //this.router.navigateByUrl('/participantLibrary');
    }
}

class NewParticipantLibraryItem implements IParticipantLibraryItem {
    NexusKey: string;
    Id: number;
    Name: string;
    DisplayCode: string;
    DisplayName: string;
    Iso2Code: string;
    Iso3Code: string;
    TypeKey: string;
    TypeName: string;
}

