webpackJsonp([14],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage(fireAuth, navCtrl) {
        this.fireAuth = fireAuth;
        this.navCtrl = navCtrl;
        this.tabProfileRoot = __WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */];
        this.tabHomeRoot = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tabAuthRoot = __WEBPACK_IMPORTED_MODULE_5__auth_auth__["a" /* AuthPage */];
    }
    TabsPage.prototype.Signout = function () {
        this.fireAuth.auth.signOut();
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\JOB\MomMobileApp\src\pages\tabs\tabs.html"*/'<ion-tabs [selectedIndex]="1">\n  <ion-tab [root]="tabProfileRoot" tabTitle="Profile" tabIcon="md-person"></ion-tab>\n  <ion-tab [root]="tabHomeRoot" tabTitle="Home" tabIcon="md-home"></ion-tab>\n  <ion-tab (click)="Signout()" [root]="tabAuthRoot" tabTitle="Sign Out" tabIcon="md-log-out"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\JOB\MomMobileApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevelopmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createevolution_createevolution__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DevelopmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DevelopmentPage = /** @class */ (function () {
    function DevelopmentPage(navCtrl, navParams, service, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.evolution = [];
        this.loading = loadingCtrl.create({ content: 'Loading please wait...' });
        service.evolution().subscribe(function (res) {
            if (res != null && res != undefined)
                _this.evolution = res;
        });
    }
    DevelopmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DevelopmentPage');
        this.loading.dismiss();
    };
    DevelopmentPage.prototype.viewMore = function (key) {
        console.log("view MoreKey", key);
    };
    DevelopmentPage.prototype.GotoCreate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__createevolution_createevolution__["a" /* CreateevolutionPage */]);
    };
    DevelopmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-development',template:/*ion-inline-start:"D:\JOB\MomMobileApp\src\pages\development\development.html"*/'<!--\n  Generated template for the DevelopmentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-navbar>\n      <ion-title>development</ion-title>\n    </ion-navbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="GotoCreate()">\n        <ion-icon name="md-create"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding style="background: #f8f8f8;">\n  <h1 class="project-name">EVOLUTION TIMELINE</h1>\n  <div id="timeline" *ngFor="let item of evolution">\n    <div class="timeline-item">\n      <div class="timeline-icon">\n        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"\n	 width="21px" height="20px" viewBox="0 0 21 20" enable-background="new 0 0 21 20" xml:space="preserve">\n<path fill="#FFFFFF" d="M19.998,6.766l-5.759-0.544c-0.362-0.032-0.676-0.264-0.822-0.61l-2.064-4.999\n	c-0.329-0.825-1.5-0.825-1.83,0L7.476,5.611c-0.132,0.346-0.462,0.578-0.824,0.61L0.894,6.766C0.035,6.848-0.312,7.921,0.333,8.499\n	l4.338,3.811c0.279,0.246,0.395,0.609,0.314,0.975l-1.304,5.345c-0.199,0.842,0.708,1.534,1.468,1.089l4.801-2.822\n	c0.313-0.181,0.695-0.181,1.006,0l4.803,2.822c0.759,0.445,1.666-0.23,1.468-1.089l-1.288-5.345\n	c-0.081-0.365,0.035-0.729,0.313-0.975l4.34-3.811C21.219,7.921,20.855,6.848,19.998,6.766z"/>\n</svg>\n      </div>\n      <div class="timeline-content">\n        <h2>{{item.week}}</h2>\n        <p>{{item.detail}}\n        </p>\n        <button (click)="viewMore(item.id)" class="btn">More</button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\JOB\MomMobileApp\src\pages\development\development.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], DevelopmentPage);
    return DevelopmentPage;
}());

//# sourceMappingURL=development.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateevolutionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CreateevolutionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateevolutionPage = /** @class */ (function () {
    function CreateevolutionPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
    }
    CreateevolutionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateevolutionPage');
    };
    CreateevolutionPage.prototype.createEvolution = function (temp) {
        this.service.createEvolution(temp.value["week"], temp.value["detail"]);
        this.navCtrl.pop();
    };
    CreateevolutionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-createevolution',template:/*ion-inline-start:"D:\JOB\MomMobileApp\src\pages\createevolution\createevolution.html"*/'<!--\n  Generated template for the CreateevolutionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>createevolution</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #tempForm="ngForm" (submit)="createEvolution(tempForm)">\n    <ion-list>\n      <ion-list>\n        <ion-item>\n          <ion-label>week</ion-label>\n          <ion-input [(ngModel)]="week" name="week" type="text" required ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>detail</ion-label>\n          <ion-input [(ngModel)]="detail" name="detail" type="text" required></ion-input>\n        </ion-item>\n      </ion-list>\n    </ion-list>\n    <div padding-top>\n      <button ion-button block [disabled]="!tempForm.form.valid" type="submit">save</button>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\JOB\MomMobileApp\src\pages\createevolution\createevolution.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], CreateevolutionPage);
    return CreateevolutionPage;
}());

//# sourceMappingURL=createevolution.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KickingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the KickingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KickingPage = /** @class */ (function () {
    function KickingPage(navCtrl, navParams, service, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.kickingRecord = [];
        this.loading = loadingCtrl.create({ content: 'Loading please wait...' });
        service.kickingRecord().subscribe(function (res) {
            if (res != null && res != undefined)
                _this.kickingRecord = res;
        });
    }
    KickingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KickingPage');
        this.loading.dismiss();
    };
    KickingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kicking',template:/*ion-inline-start:"D:\JOB\MomMobileApp\src\pages\kicking\kicking.html"*/'<!--\n  Generated template for the KickingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-navbar>\n      <ion-title>kicking</ion-title>\n    </ion-navbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="GotoCreate()">\n        <ion-icon name="md-create"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-row style="margin-top: 75px;margin-bottom: 75px">\n    <ion-col>\n      <ion-img style="position: relative; left: 50%; margin-left: -50px;background-color: transparent" src="../../assets/imgs/icons/baby.svg" [width]="100" [height]="100"></ion-img>\n    </ion-col>\n  </ion-row>\n  <ion-card>\n    <ion-card-header>\n      <h1><strong>Detail</strong></h1>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <h3><strong item-start>Kicking</strong></h3>\n        <p item-end>15 Times</p>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\JOB\MomMobileApp\src\pages\kicking\kicking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], KickingPage);
    return KickingPage;
}());

//# sourceMappingURL=kicking.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NamesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NamesPage = /** @class */ (function () {
    function NamesPage(navCtrl, navParams, service, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.names = [];
        this.searchName = [];
        this.tab = "name";
        this.loading = loadingCtrl.create({ content: 'Loading please wait...' });
        service.names().subscribe(function (res) {
            if (res != null && res != undefined)
                _this.names = res;
        });
    }
    NamesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NamesPage');
        this.loading.dismiss();
    };
    NamesPage.prototype.coCancel = function () {
        this.searchName = this.names;
        this.tab = "name";
    };
    NamesPage.prototype.onClickSearch = function () {
        this.tab = "search";
    };
    NamesPage.prototype.onSearch = function (ev) {
        this.searchName = this.names;
        var val = ev.target.value;
        if (val && val.trim() !== '') {
            this.searchName = this.names.filter(function (item) {
                return item.DisplayName.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
        }
    };
    NamesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-names',template:/*ion-inline-start:"D:\JOB\MomMobileApp\src\pages\names\names.html"*/'<!--\n  Generated template for the NamesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>names</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content [ngSwitch]="tab">\n  <div *ngSwitchCase="\'name\'">\n    <div style="position: fixed;top: 30% ; left: 50%;transform: translate(-50%,-50%)">\n      <img src="../../assets/85576-OHFXVE-293.jpg" height="200" width="200"/></div>\n    </div>\n  <ion-fab style="position: fixed;top: 60% ; left: 50%;transform: translate(-50%,-50%)">\n    <button style="width: 150px;height: 150px;font-size: 45px" ion-fab>ค้นหา</button>\n  </ion-fab>\n  <div *ngSwitchCase="\'search\'">\n    <div>\n      <ion-searchbar\n        [showCancelButton]="true"\n      ></ion-searchbar>\n    </div>\n    <ion-fab right bottom>\n      <button ion-fab color="primary"><ion-icon name="ios-funnel"></ion-icon></button>\n    </ion-fab>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\JOB\MomMobileApp\src\pages\names\names.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], NamesPage);
    return NamesPage;
}());

//# sourceMappingURL=names.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createnotification_createnotification__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl, navParams, service, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.CurTime = new Clock();
        this.notifications = [];
        this.loading = loadingCtrl.create({ content: 'Loading please wait...' });
        service.notification().subscribe(function (res) {
            if (res != null && res != undefined)
                _this.notifications = res;
        });
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
        this.CurTime.startClockHandler();
        this.loading.dismiss();
    };
    NotificationPage.prototype.GotoCreate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__createnotification_createnotification__["a" /* CreatenotificationPage */]);
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"D:\JOB\MomMobileApp\src\pages\notification\notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n    <ion-navbar>\n      <ion-title>notification</ion-title>\n    </ion-navbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="GotoCreate()">\n        <ion-icon name="md-create"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-row justify-content-center margin-vertical>\n      <h1 style="font-size: 60px">{{CurTime.time}}</h1>\n    </ion-row>\n  </ion-card>\n  <ng-container *ngFor="let item of notifications">\n    <ion-card>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/icons/alarm.svg">\n        </ion-thumbnail>\n        <h2>{{item.title}}</h2>\n        <ion-row>\n          <ion-col>\n            <p>{{item.time}}</p>\n          </ion-col>\n          <ion-col>\n            <p>{{item.type}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-img item-end style="background-color: transparent" src="assets/imgs/icons/edit.svg" [width]="40"\n                 [height]="40"></ion-img>\n      </ion-item>\n    </ion-card>\n  </ng-container>\n</ion-content>\n'/*ion-inline-end:"D:\JOB\MomMobileApp\src\pages\notification\notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], NotificationPage);
    return NotificationPage;
}());

var Clock = /** @class */ (function () {
    function Clock() {
        this.time = "00:00:00";
    }
    Clock.prototype.getTime = function () {
        var date = new Date();
        return [date.getHours(), date.getMinutes(), date.getSeconds()]
            .map(function (current) { return current >= 10 ? current : "0" + current; }).join(":");
    };
    Clock.prototype.startClockHandler = function () {
        this.clockHandler = setInterval(function (parent) {
            this.time = this.getTime();
        }.bind(this), 1000);
    };
    return Clock;
}());
//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatenotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CreatenotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreatenotificationPage = /** @class */ (function () {
    function CreatenotificationPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
    }
    CreatenotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreatenotificationPage');
    };
    CreatenotificationPage.prototype.createNotification = function (temp) {
        this.service.createNotification(temp.value["title"], temp.value["time"], temp.value["sound"], temp.value["type"]);
        this.navCtrl.pop();
    };
    CreatenotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-createnotification',template:/*ion-inline-start:"D:\JOB\MomMobileApp\src\pages\createnotification\createnotification.html"*/'<!--\n  Generated template for the CreatenotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>createnotification</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #tempForm="ngForm" (submit)="createNotification(tempForm)">\n    <ion-item>\n      <ion-label>title</ion-label>\n      <ion-input [(ngModel)]="title" name="title" type="text" required ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>time</ion-label>\n      <ion-input [(ngModel)]="time" name="time" type="text" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>sound</ion-label>\n      <ion-input [(ngModel)]="sound" name="sound" type="text" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>type</ion-label>\n      <ion-input [(ngModel)]="type" name="type" type="text" required></ion-input>\n    </ion-item>\n    <div padding-top>\n      <button ion-button block [disabled]="!tempForm.form.valid" type="submit">save</button>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\JOB\MomMobileApp\src\pages\createnotification\createnotification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], CreatenotificationPage);
    return CreatenotificationPage;
}());

//# sourceMappingURL=createnotification.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TalesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_document_viewer__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createtales_createtales__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TalesPage = /** @class */ (function () {
    function TalesPage(navCtrl, navParams, document, service, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.document = document;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.tales = [];
        this.loading = loadingCtrl.create({ content: 'Loading please wait...' });
        service.tales().subscribe(function (res) {
            if (res != null && res != undefined)
                _this.tales = res;
        });
    }
    TalesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TalesPage');
        this.loading.dismiss();
    };
    TalesPage.prototype.openPdf = function (title, url) {
        var options = {
            title: title.toString()
        };
        this.document.viewDocument(url.toString(), 'application/pdf', options);
        console.log('test');
    };
    TalesPage.prototype.GotoCreate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__createtales_createtales__["a" /* CreatetalesPage */]);
    };
    TalesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tales',template:/*ion-inline-start:"D:\JOB\MomMobileApp\src\pages\tales\tales.html"*/'<!--\n  Generated template for the TalesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-navbar>\n      <ion-title>Tales</ion-title>\n    </ion-navbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="GotoCreate()">\n        <ion-icon name="md-create"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding style="background-color: #222222">\n  <ion-row *ngFor="let item of tales">\n    <ion-col >\n      <ion-img src="{{item.photoURL}}" (click)="openPdf(item.title,item.file)" [width]="150" [height]="200"></ion-img>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\JOB\MomMobileApp\src\pages\tales\tales.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_document_viewer__["a" /* DocumentViewer */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], TalesPage);
    return TalesPage;
}());

//# sourceMappingURL=tales.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatetalesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CreatetalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreatetalesPage = /** @class */ (function () {
    function CreatetalesPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
    }
    CreatetalesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreatetalesPage');
    };
    CreatetalesPage.prototype.createTales = function (temp) {
        this.service.createTales(temp.value["photoURL"], temp.value["file"], temp.value["title"], temp.value["description"]);
        this.navCtrl.pop();
    };
    CreatetalesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-createtales',template:/*ion-inline-start:"D:\JOB\MomMobileApp\src\pages\createtales\createtales.html"*/'<!--\n  Generated template for the CreatetalesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>createtales</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #tempForm="ngForm" (submit)="createTales(tempForm)">\n    <ion-list>\n      <ion-item>\n        <ion-label>photoURL</ion-label>\n        <ion-input [(ngModel)]="photoURL" name="photoURL" type="text" required ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>file</ion-label>\n        <ion-input [(ngModel)]="file" name="file" type="text" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>title</ion-label>\n        <ion-input [(ngModel)]="title" name="title" type="text" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>description</ion-label>\n        <ion-input [(ngModel)]="description" name="description" type="text" required></ion-input>\n      </ion-item>\n    </ion-list>\n    <div padding-top>\n      <button ion-button block [disabled]="!tempForm.form.valid" type="submit">save</button>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\JOB\MomMobileApp\src\pages\createtales\createtales.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], CreatetalesPage);
    return CreatetalesPage;
}());

//# sourceMappingURL=createtales.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createvideo_createvideo__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the VideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VideosPage = /** @class */ (function () {
    function VideosPage(navCtrl, navParams, service, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.videos = [];
        this.loading = loadingCtrl.create({ content: 'Loading please wait...' });
        service.video().subscribe(function (res) {
            if (res != null && res != undefined)
                _this.videos = res;
        });
    }
    VideosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideosPage');
        this.loading.dismiss();
    };
    VideosPage.prototype.GotoCreate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__createvideo_createvideo__["a" /* CreatevideoPage */]);
    };
    VideosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-videos',template:/*ion-inline-start:"D:\JOB\MomMobileApp\src\pages\videos\videos.html"*/'<!--\n  Generated template for the VideosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-navbar>\n      <ion-title>Videos</ion-title>\n    </ion-navbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="GotoCreate()">\n        <ion-icon name="md-create"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngFor="let item of videos">\n    <ion-card>\n      <div style="position:relative;height:0;padding-bottom:56.25%">\n        <iframe src="https://www.youtube.com/embed/{{item.vid}}?ecver=2"\n                style="position:absolute;width:100%;height:100%;left:0" width="640" height="360" frameborder="0"\n                allow="autoplay; encrypted-media" allowfullscreen></iframe>\n      </div>\n      <ion-card-content>\n        <ion-card-title>\n          {{item.title}}\n        </ion-card-title>\n        <p>\n          {{item.description}}\n        </p>\n      </ion-card-content>\n      <ion-row>\n        <ion-col>\n          <button ion-button icon-start clear small>\n            <ion-icon name="thumbs-up"></ion-icon>\n            <div>{{item.liked}}</div>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-start clear small>\n            <ion-icon name="text"></ion-icon>\n            <div>{{item.unliked}}</div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\JOB\MomMobileApp\src\pages\videos\videos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], VideosPage);
    return VideosPage;
}());

//# sourceMappingURL=videos.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatevideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CreatevideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreatevideoPage = /** @class */ (function () {
    function CreatevideoPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
    }
    CreatevideoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreatevideoPage');
    };
    CreatevideoPage.prototype.createVideos = function (temp) {
        this.service.createVideo(temp.value["url"], temp.value["title"], temp.value["description"]);
    };
    CreatevideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-createvideo',template:/*ion-inline-start:"D:\JOB\MomMobileApp\src\pages\createvideo\createvideo.html"*/'<!--\n  Generated template for the CreatevideoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>createvideo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #tempForm="ngForm" (submit)="createVideos(tempForm)">\n    <ion-list>\n      <ion-item>\n        <ion-label>url youtube</ion-label>\n        <ion-input [(ngModel)]="url" name="url" type="text" required ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>file</ion-label>\n        <ion-input [(ngModel)]="title" name="title" type="text" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>description</ion-label>\n        <ion-input [(ngModel)]="description" name="description" type="text" required></ion-input>\n      </ion-item>\n    </ion-list>\n    <div padding-top>\n      <button ion-button block [disabled]="!tempForm.form.valid" type="submit">save</button>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\JOB\MomMobileApp\src\pages\createvideo\createvideo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], CreatevideoPage);
    return CreatevideoPage;
}());

//# sourceMappingURL=createvideo.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.userData = {};
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ProfilePage');
        this.storage.get("UserData").then(function (value) {
            _this.userData = value;
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\JOB\MomMobileApp\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-row justify-content-center>\n      <ion-avatar margin-vertical>\n        <ion-img class="profile-user-img img-circle" src="{{userData.photoURL}}" [height]="100" [width]="100" [cache]="true"></ion-img>\n      </ion-avatar>\n    </ion-row>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <h2 item-left><strong>DisplayName : </strong></h2>\n      <p item-left>{{userData.displayname}}</p>\n    </ion-item>\n    <ion-item>\n      <h2 item-left><strong>Email : </strong></h2>\n      <p item-left>{{userData.email}}</p>\n    </ion-item>\n    <ion-item>\n      <h2 item-left><strong>Tel : </strong></h2>\n      <p item-left>{{userData.phoneNumber}}</p>\n    </ion-item>\n    <ion-item>\n      <h3 item-left><strong>Address : </strong></h3>\n      <p item-left>{{userData.address}}</p>\n    </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\JOB\MomMobileApp\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"D:\JOB\MomMobileApp\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #SignUpForm="ngForm" (submit)="SignIn(SignUpForm)">\n    <ion-list>\n\n      <ion-item>\n        <ion-label>Email</ion-label>\n        <ion-input [(ngModel)]="email" name="email" type="email"\n                   pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"\n                   required #verifyemail="ngModel"></ion-input>\n      </ion-item>\n      <span *ngIf="verifyemail.errors">\n                <span [hidden]="!verifyemail.errors.required">\n                    <ion-label style="color: red; margin-left: 16px;"> Email is required </ion-label>\n                </span>\n                <span [hidden]="!verifyemail.errors.pattern">\n                    <ion-label style="color: red; margin-left: 16px;"> Please enter a valid email </ion-label>\n                </span>\n            </span>\n\n      <ion-item>\n        <ion-label>Password</ion-label>\n        <ion-input [(ngModel)]="password" name="password" type="password" pattern=".{8,}" required\n                   #verifypassword="ngModel"></ion-input>\n      </ion-item>\n\n      <span *ngIf="verifypassword.errors">\n                <span [hidden]="!verifypassword.errors.required">\n                    <ion-label style="color: red; margin-left: 16px;"> Password is required </ion-label>\n                </span>\n                        <span [hidden]="!verifypassword.errors.pattern">\n                    <ion-label\n                      style="color: red; margin-left: 16px;"> Password must be more than 8 characters! </ion-label>\n                </span>\n            </span>\n\n      <ion-item>\n        <ion-label>Re_Password</ion-label>\n        <ion-input [(ngModel)]="Re_Password" name="Re_Password" type="password" pattern=".{8,}" required\n                   #verifyRe_Password="ngModel"></ion-input>\n      </ion-item>\n\n      <span *ngIf="verifyRe_Password.errors">\n                <span [hidden]="!verifyRe_Password.errors.required">\n                    <ion-label style="color: red; margin-left: 16px;"> Password is required </ion-label>\n                </span>\n                        <span [hidden]="!verifyRe_Password.errors.pattern">\n                    <ion-label\n                      style="color: red; margin-left: 16px;"> Password must be more than 8 characters! </ion-label>\n                </span>\n            </span>\n\n    </ion-list>\n    <div padding-top>\n      <button ion-button block [disabled]="!SignUpForm.form.valid" type="submit">SingIn</button>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\JOB\MomMobileApp\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 212;

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_storage__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiceProvider = /** @class */ (function () {
    function ServiceProvider(fbAuth, db, fbstore, storeage) {
        this.fbAuth = fbAuth;
        this.db = db;
        this.fbstore = fbstore;
        this.storeage = storeage;
        console.log('Hello ServiceProvider Provider');
    }
    ServiceProvider.prototype.UpdateUserData = function () {
        var _this = this;
        this.db.object("users/" + this.fbAuth.auth.currentUser.uid + "/profile/").valueChanges().subscribe(function (value) {
            if (value == null || value == undefined) {
                _this.db.database.ref("users/" + _this.fbAuth.auth.currentUser.uid + "/profile/").update({
                    displayName: _this.fbAuth.auth.currentUser.displayName,
                    photoURL: _this.fbAuth.auth.currentUser.photoURL,
                    email: _this.fbAuth.auth.currentUser.email,
                    phoneNumber: _this.fbAuth.auth.currentUser.phoneNumber
                });
                _this.UpdateUserData();
            }
            else {
                _this.storeage.set("UserData", value);
            }
        });
    };
    ServiceProvider.prototype.evolution = function () {
        return this.db.list('system/evolution').snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (item) {
                var data = item.payload.exportVal();
                data.id = item.key;
                return data;
            });
        }));
    };
    ServiceProvider.prototype.createEvolution = function (week, detail) {
        this.db.database.ref('system/evolution').push({
            week: week,
            detail: detail
        }).then(function (val) { return console.log(val); });
    };
    ServiceProvider.prototype.notification = function () {
        return this.db.list('users/' + this.fbAuth.auth.currentUser.uid + '/notification').snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (item) {
                var data = item.payload.exportVal();
                data.id = item.key;
                return data;
            });
        }));
    };
    ServiceProvider.prototype.createNotification = function (title, time, sound, type) {
        this.db.database.ref('users/' + this.fbAuth.auth.currentUser.uid + '/notification').push({
            title: title,
            time: time,
            sound: sound,
            type: type
        });
    };
    ServiceProvider.prototype.tales = function () {
        return this.db.list('system/tales').snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (item) {
                var data = item.payload.exportVal();
                data.id = item.key;
                return data;
            });
        }));
    };
    ServiceProvider.prototype.createTales = function (photoURL, file, title, description) {
        this.db.database.ref('system/tales').push({
            title: title,
            description: description,
            file: file,
            photoURL: photoURL,
            timeStamp: new Date()
        });
    };
    ServiceProvider.prototype.video = function () {
        return this.db.list('system/videos').snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (item) {
                var data = item.payload.exportVal();
                data.id = item.key;
                return data;
            });
        }));
    };
    ServiceProvider.prototype.getUrlVars = function (url) {
        var vars = [], hash;
        var hashes = url.slice(url.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    };
    ServiceProvider.prototype.createVideo = function (url, title, description) {
        this.db.database.ref('system/videos').push({
            title: title,
            description: description,
            vid: this.getUrlVars(url)["v"],
            liked: 0,
            unliked: 0,
            timeStamp: new Date()
        });
    };
    ServiceProvider.prototype.names = function () {
        return this.db.list('system/tales').snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (item) {
                var data = item.payload.exportVal();
                data.id = item.key;
                return data;
            });
        }));
    };
    ServiceProvider.prototype.kickingRecord = function () {
        return this.db.list('users/' + this.fbAuth.auth.currentUser.uid + '/kickingRecord').snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (item) {
                var data = item.payload.exportVal();
                data.id = item.key;
                return data;
            });
        }));
    };
    ServiceProvider.prototype.CreateRecordKicking = function (times) {
        this.db.database.ref('users/' + this.fbAuth.auth.currentUser.uid + '/kickingRecord').push({
            kickingTimes: times,
            timeStamp: new Date()
        });
    };
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], ServiceProvider);
    return ServiceProvider;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/auth/auth.module": [
		530,
		13
	],
	"../pages/createevolution/createevolution.module": [
		531,
		12
	],
	"../pages/createnotification/createnotification.module": [
		532,
		11
	],
	"../pages/createrecordkicking/createrecordkicking.module": [
		533,
		10
	],
	"../pages/createtales/createtales.module": [
		534,
		9
	],
	"../pages/createvideo/createvideo.module": [
		535,
		8
	],
	"../pages/development/development.module": [
		536,
		7
	],
	"../pages/kicking/kicking.module": [
		542,
		6
	],
	"../pages/names/names.module": [
		543,
		5
	],
	"../pages/notification/notification.module": [
		537,
		4
	],
	"../pages/profile/profile.module": [
		538,
		3
	],
	"../pages/signup/signup.module": [
		539,
		2
	],
	"../pages/tales/tales.module": [
		540,
		1
	],
	"../pages/videos/videos.module": [
		541,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 253;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__development_development__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kicking_kicking__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__names_names__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notification_notification__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tales_tales__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__videos_videos__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.DevelopmentPage = __WEBPACK_IMPORTED_MODULE_2__development_development__["a" /* DevelopmentPage */];
        this.KickingPage = __WEBPACK_IMPORTED_MODULE_3__kicking_kicking__["a" /* KickingPage */];
        this.NamesPage = __WEBPACK_IMPORTED_MODULE_4__names_names__["a" /* NamesPage */];
        this.NotificationPage = __WEBPACK_IMPORTED_MODULE_5__notification_notification__["a" /* NotificationPage */];
        this.TalesPage = __WEBPACK_IMPORTED_MODULE_6__tales_tales__["a" /* TalesPage */];
        this.VideosPage = __WEBPACK_IMPORTED_MODULE_7__videos_videos__["a" /* VideosPage */];
    }
    HomePage.prototype.ChangeRoot = function (root) {
        this.navCtrl.push(root);
    };
    HomePage.prototype.presentAlertCommingSoon = function () {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: 'Coming Soon',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\JOB\MomMobileApp\src\pages\home\home.html"*/'\n\n<ion-content padding style=\'background-image: url("../../assets/imgs/bg/SVG/home.svg") ; background-position: center; background-size: cover\'>\n  <ion-slides>\n    <ion-slide>\n      <div class="row">\n        <div class="col">\n          <ion-img src="../../assets/imgs/icons/031-clapperboard.png" (click) = "ChangeRoot(VideosPage)"\n                   [height]="85" [width]="85" [cache]="true" style="background: transparent"></ion-img>\n          <!--<ion-badge style="font-size: large;z-index: 99999;position: fixed; margin-left: -20px" color="danger">2</ion-badge>-->\n          <h5>Videos</h5>\n        </div>\n        <div class="col">\n          <ion-img src="../../assets/imgs/icons/034-ultrasound.png" (click) = "ChangeRoot(DevelopmentPage)"\n                   [height]="85" [width]="85" [cache]="true" style="background: transparent"></ion-img>\n          <!--<ion-badge style="font-size: large;z-index: 99999;position: fixed; margin-left: -20px" color="danger">2</ion-badge>-->\n          <h5>Evolution</h5>\n        </div>\n        <div class="col">\n          <ion-img src="../../assets/imgs/icons/029-exam.png" (click) = "presentAlertCommingSoon()"\n                   [height]="85" [width]="85" [cache]="true" style="background: transparent"></ion-img>\n          <!--<ion-badge style="font-size: large;z-index: 99999;position: fixed; margin-left: -20px" color="danger">2</ion-badge>-->\n          <h5>Notification</h5>\n        </div>\n      </div>\n      <div class="row">\n        <div class="col">\n          <ion-img src="../../assets/imgs/icons/014-photo-album.png" (click) = "ChangeRoot(TalesPage)"\n                   [height]="85" [width]="85" [cache]="true" style="background: transparent"></ion-img>\n          <!--<ion-badge style="font-size: large;z-index: 99999;position: fixed; margin-left: -20px" color="danger">2</ion-badge>-->\n          <h5>Tale Books</h5>\n        </div>\n        <div class="col">\n          <ion-img src="../../assets/imgs/icons/044-baby.png" (click) = "presentAlertCommingSoon()"\n                   [height]="85" [width]="85" [cache]="true" style="background: transparent"></ion-img>\n          <!--<ion-badge style="font-size: large;z-index: 99999;position: fixed; margin-left: -20px" color="danger">2</ion-badge>-->\n          <h5>Create Name</h5>\n        </div>\n        <div class="col">\n          <ion-img src="../../assets/imgs/icons/042-pregnant.png" (click) = "presentAlertCommingSoon()"\n                   [height]="85" [width]="85" [cache]="true" style="background: transparent"></ion-img>\n          <!--<ion-badge style="font-size: large;z-index: 99999;position: fixed; margin-left: -20px" color="danger">2</ion-badge>-->\n          <h5>Kick Record</h5>\n        </div>\n      </div>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"D:\JOB\MomMobileApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreaterecordkickingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CreaterecordkickingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreaterecordkickingPage = /** @class */ (function () {
    function CreaterecordkickingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CreaterecordkickingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreaterecordkickingPage');
    };
    CreaterecordkickingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-createrecordkicking',template:/*ion-inline-start:"D:\JOB\MomMobileApp\src\pages\createrecordkicking\createrecordkicking.html"*/'<!--\n  Generated template for the CreaterecordkickingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>createrecordkicking</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\JOB\MomMobileApp\src\pages\createrecordkicking\createrecordkicking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CreaterecordkickingPage);
    return CreaterecordkickingPage;
}());

//# sourceMappingURL=createrecordkicking.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(450);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_videos_videos__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_development_development__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tales_tales__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_notification_notification__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_names_names__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_kicking_kicking__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_document_viewer__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_fire__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_fire_database__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_fire_auth__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_service_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_fire_storage__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__FriebaseConfig__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_auth_auth__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_signup_signup__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_storage__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_createevolution_createevolution__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_createnotification_createnotification__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_createrecordkicking_createrecordkicking__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_createtales_createtales__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_createvideo_createvideo__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_videos_videos__["a" /* VideosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_development_development__["a" /* DevelopmentPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tales_tales__["a" /* TalesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_names_names__["a" /* NamesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_kicking_kicking__["a" /* KickingPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_auth_auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_createevolution_createevolution__["a" /* CreateevolutionPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_createnotification_createnotification__["a" /* CreatenotificationPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_createrecordkicking_createrecordkicking__["a" /* CreaterecordkickingPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_createtales_createtales__["a" /* CreatetalesPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_createvideo_createvideo__["a" /* CreatevideoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/auth/auth.module#AuthPageModule', name: 'AuthPage', segment: 'auth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/createevolution/createevolution.module#CreateevolutionPageModule', name: 'CreateevolutionPage', segment: 'createevolution', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/createnotification/createnotification.module#CreatenotificationPageModule', name: 'CreatenotificationPage', segment: 'createnotification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/createrecordkicking/createrecordkicking.module#CreaterecordkickingPageModule', name: 'CreaterecordkickingPage', segment: 'createrecordkicking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/createtales/createtales.module#CreatetalesPageModule', name: 'CreatetalesPage', segment: 'createtales', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/createvideo/createvideo.module#CreatevideoPageModule', name: 'CreatevideoPage', segment: 'createvideo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/development/development.module#DevelopmentPageModule', name: 'DevelopmentPage', segment: 'development', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tales/tales.module#TalesPageModule', name: 'TalesPage', segment: 'tales', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/videos/videos.module#VideosPageModule', name: 'VideosPage', segment: 'videos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/kicking/kicking.module#KickingPageModule', name: 'KickingPage', segment: 'kicking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/names/names.module#NamesPageModule', name: 'NamesPage', segment: 'names', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_21__FriebaseConfig__["a" /* FirebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_17__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_fire_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_videos_videos__["a" /* VideosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_development_development__["a" /* DevelopmentPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tales_tales__["a" /* TalesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_names_names__["a" /* NamesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_kicking_kicking__["a" /* KickingPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_auth_auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_createevolution_createevolution__["a" /* CreateevolutionPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_createnotification_createnotification__["a" /* CreatenotificationPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_createrecordkicking_createrecordkicking__["a" /* CreaterecordkickingPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_createtales_createtales__["a" /* CreatetalesPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_createvideo_createvideo__["a" /* CreatevideoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_document_viewer__["a" /* DocumentViewer */],
                __WEBPACK_IMPORTED_MODULE_19__providers_service_service__["a" /* ServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_auth_auth__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire_auth__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_service_service__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, firebaseAuth, service) {
        var _this = this;
        this.firebaseAuth = firebaseAuth;
        this.service = service;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_auth_auth__["a" /* AuthPage */];
        platform.ready().then(function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Okay, so the platform is ready and our plugins are available.
                        // Here you can do any higher level native things you might need.
                        console.log('verifying Authentication...');
                        return [4 /*yield*/, this.firebaseAuth.authState.subscribe(function (user) {
                                console.log(user);
                                if (user != null) {
                                    _this.service.UpdateUserData();
                                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
                                }
                            })];
                    case 1:
                        _a.sent();
                        statusBar.styleDefault();
                        splashScreen.hide();
                        return [2 /*return*/];
                }
            });
        }); });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\JOB\MomMobileApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\JOB\MomMobileApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_7__providers_service_service__["a" /* ServiceProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseConfig; });
var FirebaseConfig = {
    apiKey: "AIzaSyDJHerCp--_9sAehCcdiPBz9yzFe8Rg6uE",
    authDomain: "momapp-63a5f.firebaseapp.com",
    databaseURL: "https://momapp-63a5f.firebaseio.com",
    projectId: "momapp-63a5f",
    storageBucket: "",
    messagingSenderId: "393820349909"
};
//# sourceMappingURL=FriebaseConfig.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_service__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AuthPage = /** @class */ (function () {
    function AuthPage(navCtrl, navParams, firebaseAuth, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseAuth = firebaseAuth;
        this.service = service;
        this.error = "";
    }
    AuthPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad AuthPage');
        console.log('verifying Authentication...');
        this.firebaseAuth.authState.subscribe(function (user) {
            console.log(user);
            if (user != null) {
                _this.service.UpdateUserData();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
            }
        });
    };
    AuthPage.prototype.SignIn = function (data) {
        var _this = this;
        console.log("SignIn Data => ", data.value);
        this.firebaseAuth.auth.signInWithEmailAndPassword(data.value["email"], data.value["password"]).then(function (success) {
            console.log(success);
            console.log(_this.firebaseAuth.auth.currentUser);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        }).catch(function (err) {
            _this.error = err;
            console.log(err);
        });
    };
    AuthPage.prototype.SignInWithFacebook = function () {
        var _this = this;
        console.log("Singing With Facebook");
        this.firebaseAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"].FacebookAuthProvider()).then(function (success) {
            console.log(success);
            console.log(_this.firebaseAuth.auth.currentUser);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        }).catch(function (err) {
            _this.error = err;
            console.log(err);
        });
    };
    AuthPage.prototype.SignInWithGoogle = function () {
        var _this = this;
        console.log("Singing With Google");
        this.firebaseAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"].GoogleAuthProvider).then(function (success) {
            console.log(success);
            console.log(_this.firebaseAuth.auth.currentUser);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        }).catch(function (err) {
            _this.error = err;
            console.log(err);
        });
    };
    AuthPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auth',template:/*ion-inline-start:"D:\JOB\MomMobileApp\src\pages\auth\auth.html"*/'<!--\n  Generated template for the AuthPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>auth</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #SingInForm="ngForm" (submit)="SignIn(SingInForm)">\n    <ion-list>\n\n      <ion-item>\n        <ion-label>Email</ion-label>\n        <ion-input [(ngModel)]="email" name="email" type="email"\n                   pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"\n                   required #verifyemail="ngModel"></ion-input>\n      </ion-item>\n      <span *ngIf="verifyemail.errors">\n                <span [hidden]="!verifyemail.errors.required">\n                    <ion-label style="color: red; margin-left: 16px;"> Email is required </ion-label>\n                </span>\n                <span [hidden]="!verifyemail.errors.pattern">\n                    <ion-label style="color: red; margin-left: 16px;"> Please enter a valid email </ion-label>\n                </span>\n            </span>\n\n      <ion-item>\n        <ion-label>Password</ion-label>\n        <ion-input [(ngModel)]="password" name="password" type="password" pattern=".{8,}" required\n                   #verifypassword="ngModel"></ion-input>\n      </ion-item>\n\n      <span *ngIf="verifypassword.errors">\n                <span [hidden]="!verifypassword.errors.required">\n                    <ion-label style="color: red; margin-left: 16px;"> Password is required </ion-label>\n                </span>\n                        <span [hidden]="!verifypassword.errors.pattern">\n                    <ion-label\n                      style="color: red; margin-left: 16px;"> Password must be more than 8 characters! </ion-label>\n                </span>\n            </span>\n      <span [hidden]="error == null">\n          <ion-label style="color: red; margin-left: 16px;"> {{error}} </ion-label>\n      </span>\n\n    </ion-list>\n    <div padding-top>\n      <button ion-button block [disabled]="!SingInForm.form.valid" type="submit">SingIn</button>\n    </div>\n    <div padding-top>\n      <button ion-button block (click)="SignInWithFacebook()" type="button">SingIn With Facebook</button>\n    </div>\n    <div padding-top>\n      <button ion-button block (click)="SignInWithGoogle()" type="button">SingIn With Google</button>\n    </div>\n    <div padding-top>\n      <button ion-button block (click)="signup()" type="button">Register</button>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\JOB\MomMobileApp\src\pages\auth\auth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_6__providers_service_service__["a" /* ServiceProvider */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ })

},[317]);
//# sourceMappingURL=main.js.map