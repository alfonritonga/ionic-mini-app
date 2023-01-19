import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ionic/angular";
export class IonRatingStarsComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXJhdGluZy1zdGFycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pb24tcmF0aW5nLXN0YXJzL3NyYy9saWIvaW9uLXJhdGluZy1zdGFycy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pb24tcmF0aW5nLXN0YXJzL3NyYy9saWIvaW9uLXJhdGluZy1zdGFycy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFRL0UsTUFBTSxPQUFPLHVCQUF1QjtJQVdsQztRQVZBLFVBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVmLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixVQUFLLEdBQVcsTUFBTSxDQUFDO1FBQ3ZCLGdCQUFXLEdBQVcsUUFBUSxDQUFBO1FBQzlCLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUN6QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFFakMsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUVELFVBQVUsQ0FBQyxDQUFTO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O29IQW5CVSx1QkFBdUI7d0dBQXZCLHVCQUF1QixtT0NScEMsOGNBWU07MkZESk8sdUJBQXVCO2tCQU5uQyxTQUFTOytCQUNFLGtCQUFrQjswRUFRbkIsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDSSxZQUFZO3NCQUFyQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpb24tcmF0aW5nLXN0YXJzJyxcbiAgdGVtcGxhdGVVcmw6ICdpb24tcmF0aW5nLXN0YXJzLmh0bWwnLFxuICBzdHlsZXM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJb25SYXRpbmdTdGFyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHN0YXJzID0gWzEsIDIsIDMsIDQsIDVdO1xuXG4gIEBJbnB1dCgpIHJhdGluZzogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgc2l6ZTogbnVtYmVyID0gMjA7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSAnZ3JleSc7XG4gIEBJbnB1dCgpIGZpbGxlZENvbG9yOiBzdHJpbmcgPSAnb3JhbmdlJ1xuICBASW5wdXQoKSBtYXJnaW46IG51bWJlciA9IDU7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKSByYXRpbmdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgcmF0ZUNoYW5nZShpOiBudW1iZXIpIHtcbiAgICB0aGlzLnJhdGluZyA9IChpICsgMSk7XG4gICAgdGhpcy5yYXRpbmdDaGFuZ2UuZW1pdChpICsgMSk7XG4gIH1cblxufVxuIiwiPGRpdj5cclxuICAgIDxpb24taWNvbiAqbmdGb3I9XCJsZXQgc3RhciBvZiBzdGFyczsgbGV0IGkgPSBpbmRleDtcIlxyXG4gICAgW25hbWVdPVwiKGkrMSkgPD0gcmF0aW5nID8gJ3N0YXInIDogJ3N0YXItb3V0bGluZSdcIlxyXG4gICAgKGNsaWNrKT1cInJhdGVDaGFuZ2UoaSlcIlxyXG4gICAgW25nU3R5bGVdPVwie1xyXG4gICAgICAgICdjb2xvcic6IChpKzEpIDw9IHJhdGluZyA/IGZpbGxlZENvbG9yIDogY29sb3IsXHJcbiAgICAgICAgJ2ZvbnQtc2l6ZSc6IChzaXplICsgJ3B4JyksXHJcbiAgICAgICAgJ21hcmdpbi1yaWdodCc6IChtYXJnaW4gKydweCcpLFxyXG4gICAgICAgICdvcGFjaXR5JzogZGlzYWJsZWQgPyAnMC40JyA6ICcxJyxcclxuICAgICAgICAncG9pbnRlci1ldmVudHMnOiBkaXNhYmxlZCA/ICdub25lJzogJydcclxuICAgIH1cIj5cclxuICAgIDwvaW9uLWljb24+XHJcbjwvZGl2PiJdfQ==