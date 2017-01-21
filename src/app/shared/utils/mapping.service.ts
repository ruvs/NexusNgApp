import { Injectable } from '@angular/core';

//import { ISchedule, IScheduleDetails, IUser } from '../interfaces';
import { ItemsService } from './items.service'

import { IParticipantLibraryItem, IParticipantLibraryItemDetails } from '../../participantLibrary/participantLibraryItem';

@Injectable()
export class MappingService {

    constructor(private itemsService: ItemsService) { }

    mapParticipantLibraryItemDetailsToParticipantLibraryItem(scheduleDetails: IParticipantLibraryItemDetails): IParticipantLibraryItem {
        var pli: IParticipantLibraryItem = {
            NexusKey: scheduleDetails.NexusKey,
            Name: scheduleDetails.Name,
            DisplayName: scheduleDetails.DisplayName,
            DisplayCode: scheduleDetails.DisplayCode,
            Iso2Code: scheduleDetails.Iso2Code,
            Iso3Code: scheduleDetails.Iso3Code,
            Id: scheduleDetails.Id,
            TypeKey: scheduleDetails.TypeKey,
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