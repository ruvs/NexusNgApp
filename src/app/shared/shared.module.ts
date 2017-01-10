import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppConstants } from './appConstants';

import { ConfigService } from '../shared/utils/config.service';
import { ItemsService } from '../shared/utils/items.service';
import { MappingService } from '../shared/utils/mapping.service';
import { NotificationService } from '../shared/utils/notification.service';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
    ]
})
export class SharedModule { }