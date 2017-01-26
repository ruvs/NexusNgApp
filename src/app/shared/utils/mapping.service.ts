import { Injectable } from '@angular/core';

//import { ISchedule, IScheduleDetails, IUser } from '../interfaces';
import { ItemsService } from './items.service'

import { IParticipantLibraryItem, IParticipantLibraryItemDetails } from '../../participantLibrary/participantLibraryItem';

@Injectable()
export class MappingService {

    constructor(private itemsService: ItemsService) { }

    mapParticipantLibraryItemDetailsToParticipantLibraryItem(pliDetails: IParticipantLibraryItemDetails): IParticipantLibraryItem {
        var pli: IParticipantLibraryItem = {
            NexusKey: pliDetails.NexusKey,
            Name: pliDetails.Name,
            DisplayName: pliDetails.DisplayName,
            DisplayCode: pliDetails.DisplayCode,
            Iso2Code: pliDetails.Iso2Code,
            Iso3Code: pliDetails.Iso3Code,
            Id: pliDetails.Id,
            TypeKey: pliDetails.TypeKey,
            TypeName: null
        }

        return pli;
    }

    //mapScheduleDetailsToSchedule(scheduleDetails: IScheduleDetails): ISchedule {
    //    var schedule: ISchedule = {
    //        id: scheduleDetails.id,
    //        title: scheduleDetails.title,
    //        description: scheduleDetails.description,
    //        timeStart: scheduleDetails.timeStart,
    //        timeEnd: scheduleDetails.timeEnd,
    //        location: scheduleDetails.location,
    //        type: scheduleDetails.type,
    //        status: scheduleDetails.status,
    //        dateCreated: scheduleDetails.dateCreated,
    //        dateUpdated: scheduleDetails.dateUpdated,
    //        creator: scheduleDetails.creator,
    //        creatorId: scheduleDetails.creatorId,
    //        attendees: this.itemsService.getPropertyValues<IUser, number[]>(scheduleDetails.attendees, 'id')
    //    }

    //    return schedule;
    //}
}