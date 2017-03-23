import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/* ng2-bootstrap */
import { PaginationModule } from 'ng2-bootstrap';
import { DatepickerModule } from 'ng2-bootstrap';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';
import { ProgressbarModule } from 'ng2-bootstrap';
import { TimepickerModule } from 'ng2-bootstrap';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

/*  */
import { AppConstants } from '../shared/appConstants';
import { AppComponent } from '../app.component';
import { DateFormatPipe } from '../shared/pipes/date-format.pipe';
import { HighlightDirective } from '../shared/directives/highlight.directive';
import { MobileHideDirective } from '../shared/directives/mobile-hide.directive';

/* Feature Modules */
import { SharedModule } from '../shared/shared.module';
import { ConfigService } from './config.service';
import { ItemsService } from '../shared/utils/items.service';
import { MappingService } from '../shared/utils/mapping.service';
import { NotificationService } from '../shared/utils/notification.service';
import { ChannelService, SignalrWindow } from "../shared/utils/channel.service";
import { ParticipantLibraryChannelConfig } from './channelConfig.service';

import { ParticipantLibraryListComponent } from './participantLibraryList.component';
import { ParticipantLibraryItemsByTypeComponent } from './participantLibraryItemsByType.component';
import { ParticipantLibraryService } from './participantLibrary.service';

@NgModule({
    imports: [
        PaginationModule,
        DatepickerModule,
        Ng2BootstrapModule,
        ModalModule,
        ProgressbarModule,
        TimepickerModule,
        SlimLoadingBarModule.forRoot(),
        SharedModule,
        RouterModule.forChild([
            //{ path: '', redirectTo: 'participantLibrary' },
            { path: 'participantLibrary', component: ParticipantLibraryListComponent },
            { path: 'participantLibrary/:id', component: ParticipantLibraryListComponent }
            //{
            //    path: 'product/:id',
            //    canActivate: [ProductDetailGuard],
            //    component: ProductDetailComponent
            //},
        ]),
        ModalModule.forRoot()

    ],
    declarations: [
        ParticipantLibraryListComponent,
        ParticipantLibraryItemsByTypeComponent
    ],
    providers: [
        AppConstants,
        ConfigService,
        ItemsService,
        MappingService,
        NotificationService,
        ParticipantLibraryService,
        ChannelService,
            { provide: SignalrWindow, useValue: window },
            { provide: 'channel.config', useClass: ParticipantLibraryChannelConfig }
    ]
})

export class ParticipantLibraryModule { }