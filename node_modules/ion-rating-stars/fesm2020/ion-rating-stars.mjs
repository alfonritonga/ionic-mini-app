import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

class IonRatingStarsService {
    constructor() { }
}
IonRatingStarsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: IonRatingStarsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
IonRatingStarsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: IonRatingStarsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: IonRatingStarsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class IonRatingStarsComponent {
    constructor() {
        this.stars = [1, 2, 3, 4, 5];
        this.rating = 0;
        this.size = 20;
        this.color = 'grey';
        this.filledColor = 'orange';
        this.margin = 5;
        this.disabled = false;
        this.ratingChange = new EventEmitter();
    }
    ngOnInit() {
    }
    rateChange(i) {
        this.rating = (i + 1);
        this.ratingChange.emit(i + 1);
    }
}
IonRatingStarsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: IonRatingStarsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
IonRatingStarsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.4", type: IonRatingStarsComponent, selector: "ion-rating-stars", inputs: { rating: "rating", size: "size", color: "color", filledColor: "filledColor", margin: "margin", disabled: "disabled" }, outputs: { ratingChange: "ratingChange" }, ngImport: i0, template: "<div>\r\n    <ion-icon *ngFor=\"let star of stars; let i = index;\"\r\n    [name]=\"(i+1) <= rating ? 'star' : 'star-outline'\"\r\n    (click)=\"rateChange(i)\"\r\n    [ngStyle]=\"{\r\n        'color': (i+1) <= rating ? filledColor : color,\r\n        'font-size': (size + 'px'),\r\n        'margin-right': (margin +'px'),\r\n        'opacity': disabled ? '0.4' : '1',\r\n        'pointer-events': disabled ? 'none': ''\r\n    }\">\r\n    </ion-icon>\r\n</div>", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i2.IonIcon, selector: "ion-icon", inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: IonRatingStarsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ion-rating-stars', template: "<div>\r\n    <ion-icon *ngFor=\"let star of stars; let i = index;\"\r\n    [name]=\"(i+1) <= rating ? 'star' : 'star-outline'\"\r\n    (click)=\"rateChange(i)\"\r\n    [ngStyle]=\"{\r\n        'color': (i+1) <= rating ? filledColor : color,\r\n        'font-size': (size + 'px'),\r\n        'margin-right': (margin +'px'),\r\n        'opacity': disabled ? '0.4' : '1',\r\n        'pointer-events': disabled ? 'none': ''\r\n    }\">\r\n    </ion-icon>\r\n</div>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { rating: [{
                type: Input
            }], size: [{
                type: Input
            }], color: [{
                type: Input
            }], filledColor: [{
                type: Input
            }], margin: [{
                type: Input
            }], disabled: [{
                type: Input
            }], ratingChange: [{
                type: Output
            }] } });

class IonRatingStarsModule {
}
IonRatingStarsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: IonRatingStarsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
IonRatingStarsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.4", ngImport: i0, type: IonRatingStarsModule, declarations: [IonRatingStarsComponent], imports: [CommonModule,
        IonicModule], exports: [IonRatingStarsComponent] });
IonRatingStarsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: IonRatingStarsModule, imports: [CommonModule,
        IonicModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: IonRatingStarsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        IonRatingStarsComponent
                    ],
                    imports: [
                        CommonModule,
                        IonicModule
                    ],
                    exports: [
                        IonRatingStarsComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ion-rating-stars
 */

/**
 * Generated bundle index. Do not edit.
 */

export { IonRatingStarsComponent, IonRatingStarsModule, IonRatingStarsService };
//# sourceMappingURL=ion-rating-stars.mjs.map
//# sourceMappingURL=ion-rating-stars.mjs.map
