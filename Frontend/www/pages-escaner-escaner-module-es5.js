function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-escaner-escaner-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/escaner/escaner.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/escaner/escaner.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEscanerEscanerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"fondo\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"Atrás\" defaultHref=\"/\"> </ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"fondo\">\r\n  <ion-slides [options]=\"sliderOpts\"\r\n              >\r\n    <ion-slide>\r\n      \r\n      <ion-button expand=\"full\"\r\n                  fill=\"outline\"\r\n                  size=\"larege\"\r\n                  shape=\"round\">\r\n          Escanear código\r\n      </ion-button>\r\n\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/escaner/escaner-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/escaner/escaner-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: EscanerPageRoutingModule */

  /***/
  function srcAppPagesEscanerEscanerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EscanerPageRoutingModule", function () {
      return EscanerPageRoutingModule;
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


    var _escaner_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./escaner.page */
    "./src/app/pages/escaner/escaner.page.ts");

    var routes = [{
      path: '',
      component: _escaner_page__WEBPACK_IMPORTED_MODULE_3__["EscanerPage"]
    }];

    var EscanerPageRoutingModule = function EscanerPageRoutingModule() {
      _classCallCheck(this, EscanerPageRoutingModule);
    };

    EscanerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EscanerPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/escaner/escaner.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/escaner/escaner.module.ts ***!
    \*************************************************/

  /*! exports provided: EscanerPageModule */

  /***/
  function srcAppPagesEscanerEscanerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EscanerPageModule", function () {
      return EscanerPageModule;
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


    var _escaner_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./escaner-routing.module */
    "./src/app/pages/escaner/escaner-routing.module.ts");
    /* harmony import */


    var _escaner_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./escaner.page */
    "./src/app/pages/escaner/escaner.page.ts");

    var EscanerPageModule = function EscanerPageModule() {
      _classCallCheck(this, EscanerPageModule);
    };

    EscanerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _escaner_routing_module__WEBPACK_IMPORTED_MODULE_5__["EscanerPageRoutingModule"]],
      declarations: [_escaner_page__WEBPACK_IMPORTED_MODULE_6__["EscanerPage"]]
    })], EscanerPageModule);
    /***/
  },

  /***/
  "./src/app/pages/escaner/escaner.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/escaner/escaner.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEscanerEscanerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-slides, ion-slide {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXNjYW5lci9DOlxcVXNlcnNcXEpBVEVOXFxEb2N1bWVudHNcXEdpdEh1YlxcVC1Cb29rL3NyY1xcYXBwXFxwYWdlc1xcZXNjYW5lclxcZXNjYW5lci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VzY2FuZXIvZXNjYW5lci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXNjYW5lci9lc2NhbmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMsIGlvbi1zbGlkZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSIsImlvbi1zbGlkZXMsIGlvbi1zbGlkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/escaner/escaner.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/escaner/escaner.page.ts ***!
    \***********************************************/

  /*! exports provided: EscanerPage */

  /***/
  function srcAppPagesEscanerEscanerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EscanerPage", function () {
      return EscanerPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EscanerPage = /*#__PURE__*/function () {
      function EscanerPage() {
        _classCallCheck(this, EscanerPage);

        this.sliderOpts = {
          allowSlidePrev: false,
          allowSlideNext: false
        };
      }

      _createClass(EscanerPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EscanerPage;
    }();

    EscanerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-escaner',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./escaner.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/escaner/escaner.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./escaner.page.scss */
      "./src/app/pages/escaner/escaner.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], EscanerPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-escaner-escaner-module-es5.js.map