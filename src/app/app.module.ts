import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppConstants } from './shared/appConstants';
import { AppComponent } from './app.component';

import { MyErrorHandler } from './shared/myErrorHandler.service';

/* Feature Modules */
import { ParticipantLibraryModule } from './participantLibrary/participantLibrary.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([
            { path: 'home', component: AppComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            //{ path: '**', redirectTo: 'home', pathMatch: 'full' }
        ]),
        ParticipantLibraryModule
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        AppConstants,
        MyErrorHandler,
        [{ provide: ErrorHandler, useClass: MyErrorHandler }],
    ],
    bootstrap: [AppComponent ]
})
export class AppModule { }
