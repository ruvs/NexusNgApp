import { IParticipantLibraryItemType } from './participantLibraryItemType';

export interface IParticipantLibraryItem {
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

export interface IParticipantLibraryItemDetails {
    NexusKey: string;
    Id: number;
    Name: string;
    DisplayCode: string;
    DisplayName: string;
    Iso2Code: string;
    Iso3Code: string;
    TypeKey: string;
    TypeName: string;
    Types: IParticipantLibraryItemType[];
}

