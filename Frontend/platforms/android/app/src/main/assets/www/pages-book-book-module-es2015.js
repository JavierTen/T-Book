(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-book-book-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/book/book.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/book/book.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"fondo\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"Atrás\" defaultHref=\"/busqueda\"> </ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding color=\"fondo\" class=\"ion-padding\">\r\n  <div style=\" display: flex; align-items: center; justify-content: center;\">\r\n    <ion-card style=\"width: 150px; height: 200px; \">\r\n      <ion-img [src]=\"image\" style=\"width: 170px; height: 260px;\"> </ion-img>\r\n    </ion-card>\r\n  </div>\r\n  <h1 >\r\n    {{title}}\r\n  </h1>\r\n  <h6>\r\n    {{authors}}\r\n  </h6>\r\n  <p>\r\n    {{publisher}}\r\n  </p>\r\n  <p>\r\n    {{publishedDate}}\r\n  </p>\r\n  <p>\r\n    {{description}}\r\n  </p>\r\n  <p *ngIf=\"averageRating\">\r\n    <ion-icon name=\"star\"> </ion-icon>\r\n    {{averageRating}}\r\n  </p>\r\n\r\n\r\n  <ion-button expand=\"full\" color=\"success\" routerLink='/tomar'>Tomar</ion-button>\r\n  <ion-button expand=\"full\" color=\"warning\" routerLink='/reserva'>Reservar</ion-button>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/book/book-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/book/book-routing.module.ts ***!
  \***************************************************/
/*! exports provided: BookPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPageRoutingModule", function() { return BookPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _book_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book.page */ "./src/app/pages/book/book.page.ts");




const routes = [
    {
        path: '',
        component: _book_page__WEBPACK_IMPORTED_MODULE_3__["BookPage"]
    }
];
let BookPageRoutingModule = class BookPageRoutingModule {
};
BookPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BookPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/book/book.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/book/book.module.ts ***!
  \*******************************************/
/*! exports provided: BookPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPageModule", function() { return BookPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _book_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-routing.module */ "./src/app/pages/book/book-routing.module.ts");
/* harmony import */ var _book_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book.page */ "./src/app/pages/book/book.page.ts");







let BookPageModule = class BookPageModule {
};
BookPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _book_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookPageRoutingModule"]
        ],
        declarations: [_book_page__WEBPACK_IMPORTED_MODULE_6__["BookPage"]]
    })
], BookPageModule);



/***/ }),

/***/ "./src/app/pages/book/book.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/book/book.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jvb2svYm9vay5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/book/book.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/book/book.page.ts ***!
  \*****************************************/
/*! exports provided: BookPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPage", function() { return BookPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var src_app_services_data_local_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data-local.service */ "./src/app/services/data-local.service.ts");





let BookPage = class BookPage {
    constructor(activatedRoute, router, bookService, dataLocalService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.bookService = bookService;
        this.dataLocalService = dataLocalService;
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params["id"];
        this.bookService.getBookId(this.id).subscribe(resp => {
            console.log(resp.id);
            this.title = resp.volumeInfo.title;
            this.authors = resp.volumeInfo.authors;
            this.publisher = resp.volumeInfo.publisher;
            this.publishedDate = resp.volumeInfo.publishedDate;
            this.description = resp.volumeInfo.description;
            this.image = resp.volumeInfo.imageLinks.smallThumbnail;
        });
    }
};
BookPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"] },
    { type: src_app_services_data_local_service__WEBPACK_IMPORTED_MODULE_4__["DataLocalService"] }
];
BookPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-book',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/book/book.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book.page.scss */ "./src/app/pages/book/book.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"], src_app_services_data_local_service__WEBPACK_IMPORTED_MODULE_4__["DataLocalService"]])
], BookPage);



/***/ })

}]);
//# sourceMappingURL=pages-book-book-module-es2015.js.map