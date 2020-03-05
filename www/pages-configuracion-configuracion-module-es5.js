function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-configuracion-configuracion-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracion/configuracion.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracion/configuracion.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfiguracionConfiguracionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Atrás\" defaultHref=\"/\"> </ion-back-button>\n    </ion-buttons>\n    <ion-title>Configuración</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/configuracion/configuracion-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/configuracion/configuracion-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: ConfiguracionPageRoutingModule */

  /***/
  function srcAppPagesConfiguracionConfiguracionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfiguracionPageRoutingModule", function () {
      return ConfiguracionPageRoutingModule;
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


    var _configuracion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./configuracion.page */
    "./src/app/pages/configuracion/configuracion.page.ts");

    var routes = [{
      path: '',
      component: _configuracion_page__WEBPACK_IMPORTED_MODULE_3__["ConfiguracionPage"]
    }];

    var ConfiguracionPageRoutingModule = function ConfiguracionPageRoutingModule() {
      _classCallCheck(this, ConfiguracionPageRoutingModule);
    };

    ConfiguracionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ConfiguracionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/configuracion/configuracion.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/configuracion/configuracion.module.ts ***!
    \*************************************************************/

  /*! exports provided: ConfiguracionPageModule */

  /***/
  function srcAppPagesConfiguracionConfiguracionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfiguracionPageModule", function () {
      return ConfiguracionPageModule;
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


    var _configuracion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./configuracion-routing.module */
    "./src/app/pages/configuracion/configuracion-routing.module.ts");
    /* harmony import */


    var _configuracion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./configuracion.page */
    "./src/app/pages/configuracion/configuracion.page.ts");

    var ConfiguracionPageModule = function ConfiguracionPageModule() {
      _classCallCheck(this, ConfiguracionPageModule);
    };

    ConfiguracionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _configuracion_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfiguracionPageRoutingModule"]],
      declarations: [_configuracion_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracionPage"]]
    })], ConfiguracionPageModule);
    /***/
  },

  /***/
  "./src/app/pages/configuracion/configuracion.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/configuracion/configuracion.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfiguracionConfiguracionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNpb24vY29uZmlndXJhY2lvbi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/configuracion/configuracion.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/configuracion/configuracion.page.ts ***!
    \***********************************************************/

  /*! exports provided: ConfiguracionPage */

  /***/
  function srcAppPagesConfiguracionConfiguracionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfiguracionPage", function () {
      return ConfiguracionPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConfiguracionPage = /*#__PURE__*/function () {
      function ConfiguracionPage() {
        _classCallCheck(this, ConfiguracionPage);
      }

      _createClass(ConfiguracionPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConfiguracionPage;
    }();

    ConfiguracionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-configuracion',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./configuracion.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracion/configuracion.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./configuracion.page.scss */
      "./src/app/pages/configuracion/configuracion.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ConfiguracionPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-configuracion-configuracion-module-es5.js.map