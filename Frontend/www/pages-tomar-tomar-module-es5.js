function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tomar-tomar-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tomar/tomar.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tomar/tomar.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTomarTomarPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"Atrás\" defaultHref=\"/\"> </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Tomar Libro Prestado</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/tomar/tomar-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/tomar/tomar-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: TomarPageRoutingModule */

  /***/
  function srcAppPagesTomarTomarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TomarPageRoutingModule", function () {
      return TomarPageRoutingModule;
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


    var _tomar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tomar.page */
    "./src/app/pages/tomar/tomar.page.ts");

    var routes = [{
      path: '',
      component: _tomar_page__WEBPACK_IMPORTED_MODULE_3__["TomarPage"]
    }];

    var TomarPageRoutingModule = function TomarPageRoutingModule() {
      _classCallCheck(this, TomarPageRoutingModule);
    };

    TomarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TomarPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tomar/tomar.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/tomar/tomar.module.ts ***!
    \*********************************************/

  /*! exports provided: TomarPageModule */

  /***/
  function srcAppPagesTomarTomarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TomarPageModule", function () {
      return TomarPageModule;
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


    var _tomar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tomar-routing.module */
    "./src/app/pages/tomar/tomar-routing.module.ts");
    /* harmony import */


    var _tomar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tomar.page */
    "./src/app/pages/tomar/tomar.page.ts");

    var TomarPageModule = function TomarPageModule() {
      _classCallCheck(this, TomarPageModule);
    };

    TomarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tomar_routing_module__WEBPACK_IMPORTED_MODULE_5__["TomarPageRoutingModule"]],
      declarations: [_tomar_page__WEBPACK_IMPORTED_MODULE_6__["TomarPage"]]
    })], TomarPageModule);
    /***/
  },

  /***/
  "./src/app/pages/tomar/tomar.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/tomar/tomar.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTomarTomarPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RvbWFyL3RvbWFyLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/tomar/tomar.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/tomar/tomar.page.ts ***!
    \*******************************************/

  /*! exports provided: TomarPage */

  /***/
  function srcAppPagesTomarTomarPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TomarPage", function () {
      return TomarPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TomarPage = /*#__PURE__*/function () {
      function TomarPage() {
        _classCallCheck(this, TomarPage);
      }

      _createClass(TomarPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TomarPage;
    }();

    TomarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tomar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tomar.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tomar/tomar.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tomar.page.scss */
      "./src/app/pages/tomar/tomar.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TomarPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-tomar-tomar-module-es5.js.map