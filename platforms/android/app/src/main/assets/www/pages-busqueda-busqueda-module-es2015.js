(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-busqueda-busqueda-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/busqueda/busqueda.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/busqueda/busqueda.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"Atrás\" defaultHref=\"/\"> </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Busqueda</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-searchbar placeholder=\"Buscar\" \r\n                showCancelButton=\"always\" \r\n                cancel-button-text=\"Cancelar\">\r\n  </ion-searchbar>\r\n\r\n  <ion-list *ngFor= \"let item of bookData\">\r\n    <ion-item routerLink='/book/{{item.id}}'> \r\n      <ion-label>{{item.title}}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n              \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/busqueda/busqueda-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/busqueda/busqueda-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: BusquedaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusquedaPageRoutingModule", function() { return BusquedaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _busqueda_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./busqueda.page */ "./src/app/pages/busqueda/busqueda.page.ts");




const routes = [
    {
        path: '',
        component: _busqueda_page__WEBPACK_IMPORTED_MODULE_3__["BusquedaPage"]
    }
];
let BusquedaPageRoutingModule = class BusquedaPageRoutingModule {
};
BusquedaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BusquedaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/busqueda/busqueda.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/busqueda/busqueda.module.ts ***!
  \***************************************************/
/*! exports provided: BusquedaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusquedaPageModule", function() { return BusquedaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _busqueda_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./busqueda-routing.module */ "./src/app/pages/busqueda/busqueda-routing.module.ts");
/* harmony import */ var _busqueda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./busqueda.page */ "./src/app/pages/busqueda/busqueda.page.ts");







let BusquedaPageModule = class BusquedaPageModule {
};
BusquedaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _busqueda_routing_module__WEBPACK_IMPORTED_MODULE_5__["BusquedaPageRoutingModule"]
        ],
        declarations: [_busqueda_page__WEBPACK_IMPORTED_MODULE_6__["BusquedaPage"]]
    })
], BusquedaPageModule);



/***/ }),

/***/ "./src/app/pages/busqueda/busqueda.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/busqueda/busqueda.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2J1c3F1ZWRhL2J1c3F1ZWRhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/busqueda/busqueda.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/busqueda/busqueda.page.ts ***!
  \*************************************************/
/*! exports provided: BusquedaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusquedaPage", function() { return BusquedaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let BusquedaPage = class BusquedaPage {
    constructor(apiService, activatedRoute, router) {
        this.apiService = apiService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.bookData = [];
    }
    ngOnInit() {
        this.getAllBooks();
    }
    getAllBooks() {
        //Get saved list of book
        this.apiService.getBooks().subscribe(response => {
            console.log(response);
            this.bookData = response;
        });
    }
};
BusquedaPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
BusquedaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-busqueda',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./busqueda.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/busqueda/busqueda.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./busqueda.page.scss */ "./src/app/pages/busqueda/busqueda.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], BusquedaPage);



/***/ })

}]);
//# sourceMappingURL=pages-busqueda-busqueda-module-es2015.js.map