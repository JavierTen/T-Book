function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"fondo\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"Atrás\" defaultHref=\"/\"> </ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" color=\"fondo\">\r\n\r\n  <ion-searchbar animated (ionChange)=\"buscar( $event )\" placeholder=\"Buscar\"></ion-searchbar>\r\n  <ion-card *ngFor=\"let book of libro\" routerLink='/book/{{book.id}}'>\r\n    <ion-card-content>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"4\">\r\n            <ion-img *ngIf=\"book.volumeInfo.imageLinks.smallThumbnail\"\r\n              [src]=\"book.volumeInfo.imageLinks.smallThumbnail\">\r\n            </ion-img>\r\n          </ion-col>\r\n          <ion-col size=\"8\">\r\n            <h1>\r\n              {{book.volumeInfo.title}}\r\n            </h1>\r\n            <h2>\r\n              {{book.volumeInfo.authors}}\r\n            </h2>\r\n            <p>\r\n              {{book.volumeInfo.publisher}}\r\n            </p>\r\n            <p>\r\n              {{book.volumeInfo.publishedDate}}\r\n            </p>\r\n            <p *ngIf=\"book.volumeInfo.averageRating\">\r\n              <ion-icon name=\"star\"> </ion-icon>\r\n              {{book.volumeInfo.averageRating}}\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>";
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


    __webpack_exports__["default"] = ".book-more {\n  font-size: 10px !important;\n  position: absolute;\n  right: -10px;\n  top: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYnVzcXVlZGEvQzpcXFVzZXJzXFxKQVRFTlxcRG9jdW1lbnRzXFxHaXRIdWJcXFQtQm9vay9zcmNcXGFwcFxccGFnZXNcXGJ1c3F1ZWRhXFxidXNxdWVkYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2J1c3F1ZWRhL2J1c3F1ZWRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYnVzcXVlZGEvYnVzcXVlZGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2stbW9yZXtcclxuICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgdG9wOiAtMTBweDtcclxufSIsIi5ib29rLW1vcmUge1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTEwcHg7XG4gIHRvcDogLTEwcHg7XG59Il19 */";
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
    /* harmony import */


    var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/book.service */
    "./src/app/services/book.service.ts");
    /* harmony import */


    var src_app_services_data_local_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/data-local.service */
    "./src/app/services/data-local.service.ts");

    var BusquedaPage = /*#__PURE__*/function () {
      function BusquedaPage(bookService, dataLocalService) {
        _classCallCheck(this, BusquedaPage);

        this.bookService = bookService;
        this.dataLocalService = dataLocalService;
        this.libro = [];
        this.libroBuscar = '';
      }

      _createClass(BusquedaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "google",
        value: function google(text) {
          var _this = this;

          this.bookService.getBook(text).subscribe(function (resp) {
            var _this$libro;

            console.log(resp);

            (_this$libro = _this.libro).push.apply(_this$libro, _toConsumableArray(resp.items));
          });
        }
      }, {
        key: "buscar",
        value: function buscar(event) {
          this.libroBuscar = event.detail.value;
          var re = / /gi;
          var text = this.libroBuscar.replace(re, "+");
          this.google(text);
        }
      }]);

      return BusquedaPage;
    }();

    BusquedaPage.ctorParameters = function () {
      return [{
        type: src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]
      }, {
        type: src_app_services_data_local_service__WEBPACK_IMPORTED_MODULE_3__["DataLocalService"]
      }];
    };

    BusquedaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-busqueda',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./busqueda.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/busqueda/busqueda.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./busqueda.page.scss */
      "./src/app/pages/busqueda/busqueda.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"], src_app_services_data_local_service__WEBPACK_IMPORTED_MODULE_3__["DataLocalService"]])], BusquedaPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-busqueda-busqueda-module-es5.js.map