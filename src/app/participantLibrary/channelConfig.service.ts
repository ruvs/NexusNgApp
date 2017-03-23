import { Injectable } from '@angular/core';

import { ChannelConfig } from '../shared/utils/channel.service';
import { ConfigService } from './config.service';
import { AppConstants } from '../shared/appConstants';

@Injectable()
export class ParticipantLibraryChannelConfig implements ChannelConfig {
    url: string;
    hubName: string;
    channel: string;

    constructor(private _configService: ConfigService,
        private _appConstants: AppConstants)
    {
        this.url = _appConstants.getSignalrUri();
        this.hubName = _appConstants.getSignalrHubName();
        this.channel = "ParticipantLibrary";
    }
}

