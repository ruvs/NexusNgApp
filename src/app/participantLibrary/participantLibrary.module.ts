import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/* ng2-bootstrap */
import { PaginationModule } from 'ng2-bootstrap';
import { DatepickerModule } from 'ng2-bootstrap';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';
import { ProgressbarModule } from 'ng2-bootstrap';
import { TimepickerModule } from 'ng2-bootstrap';

import { SlimLoadingBarService } from 'ng2-slim-loading-bar';


/*  */
import { AppConstants } from '../shared/appConstants';
import { AppComponent } from '../app.component';
import { DateFormatPipe } from '../shared/pipes/date-format.pipe';
import { HighlightDirective } from '../shared/directives/highlight.directive';
import { MobileHideDirective } from '../shared/directives/mobile-hide.directive';

/* Feature Modules */
import { SharedModule } from '../shared/shared.module';
import { ConfigService } from '../shared/utils/config.service';
import { ItemsService } from '../shared/utils/items.service';
import { MappingService } from '../shared/utils/mapping.service';
import { NotificationService } from '../shared/utils/notification.service';

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
        SlimLoadingBarService,
        ParticipantLibraryService
    ]
})

export class ParticipantLibraryModule { }