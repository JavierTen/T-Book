function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-historial-historial-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historial/historial.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historial/historial.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHistorialHistorialPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Atrás\" defaultHref=\"/\"> </ion-back-button>\n    </ion-buttons>\n    <ion-title>Historial</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of [1,1,1,1,1,1,1,1,1]\">\n      <ion-label>\n        <h3>\n          <ion-skeleton-text width=\"70%\"> </ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text width=\"100%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n      <ion-label>\n        <ion-skeleton-text width=\"40px\"></ion-skeleton-text>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/historial/historial-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/historial/historial-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: HistorialPageRoutingModule */

  /***/
  function srcAppPagesHistorialHistorialRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistorialPageRoutingModule", function () {
      return HistorialPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _historial_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./historial.page */
    "./src/app/pages/historial/historial.page.ts");

    var routes = [{
      path: '',
      component: _historial_page__WEBPACK_IMPORTED_MODULE_3__["HistorialPage"]
    }];

    var HistorialPageRoutingModule = function HistorialPageRoutingModule() {
      _classCallCheck(this, HistorialPageRoutingModule);
    };

    HistorialPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HistorialPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/historial/historial.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/historial/historial.module.ts ***!
    \*****************************************************/

  /*! exports provided: HistorialPageModule */

  /***/
  function srcAppPagesHistorialHistorialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistorialPageModule", function () {
      return HistorialPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _historial_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./historial-routing.module */
    "./src/app/pages/historial/historial-routing.module.ts");
    /* harmony import */


    var _historial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./historial.page */
    "./src/app/pages/historial/historial.page.ts");

    var HistorialPageModule = function HistorialPageModule() {
      _classCallCheck(this, HistorialPageModule);
    };

    HistorialPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _historial_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistorialPageRoutingModule"]],
      declarations: [_historial_page__WEBPACK_IMPORTED_MODULE_6__["HistorialPage"]]
    })], HistorialPageModule);
    /***/
  },

  /***/
  "./src/app/pages/historial/historial.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/historial/historial.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHistorialHistorialPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hpc3RvcmlhbC9oaXN0b3JpYWwucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/historial/historial.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/historial/historial.page.ts ***!
    \***************************************************/

  /*! exports provided: HistorialPage */

  /***/
  function srcAppPagesHistorialHistorialPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistorialPage", function () {
      return HistorialPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HistorialPage = /*#__PURE__*/function () {
      function HistorialPage() {
        _classCallCheck(this, HistorialPage);
      }

      _createClass(HistorialPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HistorialPage;
    }();

    HistorialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-historial',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./historial.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/historial/historial.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./historial.page.scss */
      "./src/app/pages/historial/historial.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], HistorialPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-historial-historial-module-es5.js.map