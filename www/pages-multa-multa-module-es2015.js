(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-multa-multa-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/multa/multa.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/multa/multa.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Atrás\" defaultHref=\"/\"> </ion-back-button>\n    </ion-buttons>\n    <ion-title>Multas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of [1,1,1]\">\n      <ion-label>\n        <h3>\n          <ion-skeleton-text width=\"50%\"> </ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text width=\"100%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n      <ion-label>\n        <ion-skeleton-text width=\"20px\"></ion-skeleton-text>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/multa/multa-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/multa/multa-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MultaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultaPageRoutingModule", function() { return MultaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _multa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multa.page */ "./src/app/pages/multa/multa.page.ts");




const routes = [
    {
        path: '',
        component: _multa_page__WEBPACK_IMPORTED_MODULE_3__["MultaPage"]
    }
];
let MultaPageRoutingModule = class MultaPageRoutingModule {
};
MultaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MultaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/multa/multa.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/multa/multa.module.ts ***!
  \*********************************************/
/*! exports provided: MultaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultaPageModule", function() { return MultaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _multa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./multa-routing.module */ "./src/app/pages/multa/multa-routing.module.ts");
/* harmony import */ var _multa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./multa.page */ "./src/app/pages/multa/multa.page.ts");







let MultaPageModule = class MultaPageModule {
};
MultaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _multa_routing_module__WEBPACK_IMPORTED_MODULE_5__["MultaPageRoutingModule"]
        ],
        declarations: [_multa_page__WEBPACK_IMPORTED_MODULE_6__["MultaPage"]]
    })
], MultaPageModule);



/***/ }),

/***/ "./src/app/pages/multa/multa.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/multa/multa.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL211bHRhL211bHRhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/multa/multa.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/multa/multa.page.ts ***!
  \*******************************************/
/*! exports provided: MultaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultaPage", function() { return MultaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MultaPage = class MultaPage {
    constructor() { }
    ngOnInit() {
    }
};
MultaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-multa',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./multa.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/multa/multa.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./multa.page.scss */ "./src/app/pages/multa/multa.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MultaPage);



/***/ })

}]);
//# sourceMappingURL=pages-multa-multa-module-es2015.js.map