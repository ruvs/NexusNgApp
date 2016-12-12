import { ErrorHandler } from '@angular/core';
//import { Injectable, ElementRef, Component, ErrorHandler, OnInit } from '@angular/core';

//declare var jQuery: any;

export class MyErrorHandler implements ErrorHandler {

    theErrorDetails: TheErrorDetails;

    handleError(error) {
        // do something with the exception
        console.log("NexusError:" + error);
        //this.theErrorDetails.FriendlyErrorMessage = "Oops, an error occurred!"
        //this.theErrorDetails.ErrorMessage = error;
        //jQuery(this._elRef.nativeElement).find('#myErrorModal').modal("show");
    }
}

class TheErrorDetails {
    FriendlyErrorMessage: string;
    ErrorMessage: string;
    StackTrace: string;
}

