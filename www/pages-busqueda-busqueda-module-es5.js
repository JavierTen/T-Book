function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-busqueda-busqueda-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/busqueda/busqueda.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/busqueda/busqueda.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesBusquedaBusquedaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Atrás\" defaultHref=\"/\"> </ion-back-button>\n    </ion-buttons>\n    <ion-title>Busqueda</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar placeholder=\"Buscar\" \n                showCancelButton=\"always\" \n                cancel-button-text=\"Cancelar\"></ion-searchbar>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/busqueda/busqueda-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/busqueda/busqueda-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: BusquedaPageRoutingModule */

  /***/
  function srcAppPagesBusquedaBusquedaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BusquedaPageRoutingModule", function () {
      return BusquedaPageRoutingModule;
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


    var _busqueda_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./busqueda.page */
    "./src/app/pages/busqueda/busqueda.page.ts");

    var routes = [{
      path: '',
      component: _busqueda_page__WEBPACK_IMPORTED_MODULE_3__["BusquedaPage"]
    }];

    var BusquedaPageRoutingModule = function BusquedaPageRoutingModule() {
      _classCallCheck(this, BusquedaPageRoutingModule);
    };

    BusquedaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BusquedaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/busqueda/busqueda.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/busqueda/busqueda.module.ts ***!
    \***************************************************/

  /*! exports provided: BusquedaPageModule */

  /***/
  function srcAppPagesBusquedaBusquedaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BusquedaPageModule", function () {
      return BusquedaPageModule;
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


    var _busqueda_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./busqueda-routing.module */
    "./src/app/pages/busqueda/busqueda-routing.module.ts");
    /* harmony import */


    var _busqueda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./busqueda.page */
    "./src/app/pages/busqueda/busqueda.page.ts");

    var BusquedaPageModule = function BusquedaPageModule() {
      _classCallCheck(this, BusquedaPageModule);
    };

    BusquedaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _busqueda_routing_module__WEBPACK_IMPORTED_MODULE_5__["BusquedaPageRoutingModule"]],
      declarations: [_busqueda_page__WEBPACK_IMPORTED_MODULE_6__["BusquedaPage"]]
    })], BusquedaPageModule);
    /***/
  },

  /***/
  "./src/app/pages/busqueda/busqueda.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/busqueda/busqueda.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesBusquedaBusquedaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2J1c3F1ZWRhL2J1c3F1ZWRhLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/busqueda/busqueda.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/busqueda/busqueda.page.ts ***!
    \*************************************************/

  /*! exports provided: BusquedaPage */

  /***/
  function srcAppPagesBusquedaBusquedaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BusquedaPage", function () {
      return BusquedaPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BusquedaPage = /*#__PURE__*/function () {
      function BusquedaPage() {
        _classCallCheck(this, BusquedaPage);
      }

      _createClass(BusquedaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BusquedaPage;
    }();

    BusquedaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-busqueda',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./busqueda.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/busqueda/busqueda.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./busqueda.page.scss */
      "./src/app/pages/busqueda/busqueda.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BusquedaPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-busqueda-busqueda-module-es5.js.map