import './shared/rxjs-operators';

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//ng2 bootstrap
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ProgressbarModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TimepickerModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppConstants } from './shared/appConstants';
import { AppComponent } from './app.component';
import { DateFormatPipe } from './shared/pipes/date-format.pipe';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { MobileHideDirective } from './shared/directives/mobile-hide.directive';

import { MyErrorHandler } from './shared/myErrorHandler.service';

/* Feature Modules */
import { SharedModule } from './shared/shared.module';
import { ConfigService } from './shared/utils/config.service';
import { ItemsService } from './shared/utils/items.service';
import { MappingService } from './shared/utils/mapping.service';
import { NotificationService } from './shared/utils/notification.service';

/* My Modules */
import { HomeComponent } from './home/home.component';
import { ParticipantLibraryModule } from './participantLibrary/participantLibrary.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        PaginationModule,
        DatepickerModule,
        Ng2BootstrapModule,
        ModalModule,
        ProgressbarModule,
        TimepickerModule,
        SharedModule,
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            //{ path: '**', redirectTo: 'home', pathMatch: 'full' }
        ]),
        ParticipantLibraryModule
    ],
    declarations: [
        AppComponent,
        DateFormatPipe,
        HighlightDirective,
        MobileHideDirective,
        HomeComponent,
    ],
    providers: [
        AppConstants,
        ConfigService,
        ItemsService,
        MappingService,
        NotificationService,
        //MyErrorHandler,
        //[{ provide: ErrorHandler, useClass: MyErrorHandler }],
    ],
    bootstrap: [AppComponent ]
})
export class AppModule { }
