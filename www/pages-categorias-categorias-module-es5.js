function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-categorias-categorias-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categorias/categorias.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categorias/categorias.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCategoriasCategoriasPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Atrás\" defaultHref=\"/\"> </ion-back-button>\n    </ion-buttons>\n    <ion-title>categorias</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n <ion-card *ngFor= \"let c of componentes\">\n    <ion-card-header>\n      {{c.name}}\n    </ion-card-header>\n </ion-card>\n \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/categorias/categorias-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/categorias/categorias-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: CategoriasPageRoutingModule */

  /***/
  function srcAppPagesCategoriasCategoriasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriasPageRoutingModule", function () {
      return CategoriasPageRoutingModule;
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


    var _categorias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./categorias.page */
    "./src/app/pages/categorias/categorias.page.ts");

    var routes = [{
      path: '',
      component: _categorias_page__WEBPACK_IMPORTED_MODULE_3__["CategoriasPage"]
    }];

    var CategoriasPageRoutingModule = function CategoriasPageRoutingModule() {
      _classCallCheck(this, CategoriasPageRoutingModule);
    };

    CategoriasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CategoriasPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/categorias/categorias.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/categorias/categorias.module.ts ***!
    \*******************************************************/

  /*! exports provided: CategoriasPageModule */

  /***/
  function srcAppPagesCategoriasCategoriasModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriasPageModule", function () {
      return CategoriasPageModule;
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


    var _categorias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./categorias-routing.module */
    "./src/app/pages/categorias/categorias-routing.module.ts");
    /* harmony import */


    var _categorias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./categorias.page */
    "./src/app/pages/categorias/categorias.page.ts");

    var CategoriasPageModule = function CategoriasPageModule() {
      _classCallCheck(this, CategoriasPageModule);
    };

    CategoriasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _categorias_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriasPageRoutingModule"]],
      declarations: [_categorias_page__WEBPACK_IMPORTED_MODULE_6__["CategoriasPage"]]
    })], CategoriasPageModule);
    /***/
  },

  /***/
  "./src/app/pages/categorias/categorias.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/categorias/categorias.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCategoriasCategoriasPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpYXMvY2F0ZWdvcmlhcy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/categorias/categorias.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/categorias/categorias.page.ts ***!
    \*****************************************************/

  /*! exports provided: CategoriasPage */

  /***/
  function srcAppPagesCategoriasCategoriasPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriasPage", function () {
      return CategoriasPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CategoriasPage = /*#__PURE__*/function () {
      function CategoriasPage() {
        _classCallCheck(this, CategoriasPage);

        this.componentes = [{
          name: 'Categoria0',
          redirectTo: ''
        }, {
          name: 'Categoria1',
          redirectTo: ''
        }, {
          name: 'Categoria2',
          redirectTo: ''
        }, {
          name: 'Categoria3',
          redirectTo: ''
        }, {
          name: 'Categoria4',
          redirectTo: ''
        }, {
          name: 'Categoria5',
          redirectTo: ''
        }, {
          name: 'Categoria6',
          redirectTo: ''
        }, {
          name: 'Categoria7',
          redirectTo: ''
        }, {
          name: 'Categoria8',
          redirectTo: ''
        }, {
          name: 'Categoria9',
          redirectTo: ''
        }];
      }

      _createClass(CategoriasPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CategoriasPage;
    }();

    CategoriasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categorias',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categorias.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categorias/categorias.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categorias.page.scss */
      "./src/app/pages/categorias/categorias.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CategoriasPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-categorias-categorias-module-es5.js.map