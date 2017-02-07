import { Injectable } from '@angular/core';

import { ChannelConfig } from '../shared/utils/channel.service';
import { ConfigService } from './config.service';

@Injectable()
export class ParticipantLibraryChannelConfig implements ChannelConfig {
    url: string;
    hubName: string;
    channel: string;

    constructor(private _configService: ConfigService)
    {
        this.url = _configService.getBaseUrl() + "api/participantLibrary/signalr/hubs";
        this.hubName = "ParticipantLibraryBroadcaster";
    }
}

