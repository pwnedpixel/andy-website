(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: false })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/about-me/about-me.component */ "./src/app/home/about-me/about-me.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _home_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/projects/projects.component */ "./src/app/home/projects/projects.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _home_skills_skills_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/skills/skills.component */ "./src/app/home/skills/skills.component.ts");
/* harmony import */ var _home_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/work-experience/work-experience.component */ "./src/app/home/work-experience/work-experience.component.ts");
/* harmony import */ var _home_links_links_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/links/links.component */ "./src/app/home/links/links.component.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _home_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_6__["AboutMeComponent"], _home_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"], _home_skills_skills_component__WEBPACK_IMPORTED_MODULE_11__["SkillsComponent"], _home_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_12__["WorkExperienceComponent"], _home_links_links_component__WEBPACK_IMPORTED_MODULE_13__["LinksComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/about-me/about-me.component.css":
/*!******************************************************!*\
  !*** ./src/app/home/about-me/about-me.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home/about-me/about-me.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/about-me/about-me.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/home/about-me/about-me.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/about-me/about-me.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-me',
            template: __webpack_require__(/*! ./about-me.component.html */ "./src/app/home/about-me/about-me.component.html"),
            styles: [__webpack_require__(/*! ./about-me.component.css */ "./src/app/home/about-me/about-me.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    background:rgb(45, 45, 45);\r\n    color: #fff;\r\n}\r\n\r\n.home-body {\r\n    margin: auto;\r\n    max-width: 70%;\r\n}\r\n\r\n.card {\r\n    max-width: 70%;\r\n    margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYig0NSwgNDUsIDQ1KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uaG9tZS1ib2R5IHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1heC13aWR0aDogNzAlO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n    <div class=\"jumbotron jumbotron-fluid\">\n        <div class=\"container\">\n            <h1 class=\"display-4\">Andrew Keech</h1>\n            <p class=\"lead\">Software Developer @ Alert Labs</p>\n        </div>\n    </div>\n\n    <!-- <div class=\"container\">\n\t\t\t<pre class=\"title\">\n _____________________________________________________________________\n|                                                                     |\n|  █████╗ ███╗   ██╗██████╗ ██████╗ ███████╗██╗    ██╗    ██╗  ██╗    |\n| ██╔══██╗████╗  ██║██╔══██╗██╔══██╗██╔════╝██║    ██║    ██║ ██╔╝    |\n| ███████║██╔██╗ ██║██║  ██║██████╔╝█████╗  ██║ █╗ ██║    █████╔╝     |\n| ██╔══██║██║╚██╗██║██║  ██║██╔══██╗██╔══╝  ██║███╗██║    ██╔═██╗     |\n| ██║  ██║██║ ╚████║██████╔╝██║  ██║███████╗╚███╔███╔╝    ██║  ██╗██╗ |\n| ╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝╚══════╝ ╚══╝╚══╝     ╚═╝  ╚═╝╚═╝ |\n|_____________________________________________________________________|\n      </pre\n\t\t\t>\n\t\t</div> -->\n\n    <div class=\"home-body\">\n        <app-links></app-links>\n        <app-skills></app-skills>\n        <app-work-experience></app-work-experience>\n        <app-projects></app-projects>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/links/links.component.css":
/*!************************************************!*\
  !*** ./src/app/home/links/links.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".links {\r\n\tmargin-bottom: 30px;\r\n}\r\na {\r\n\tmargin-left:10px;\r\n}\r\n.breadcrumb {\r\n\tbackground-color: transparent;\r\n\tfont-size: 1.2em;\r\n\tpadding: 0px;\r\n\tmargin: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9saW5rcy9saW5rcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFFQTtDQUNDLDZCQUE2QjtDQUM3QixnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLFlBQVk7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbGlua3MvbGlua3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5rcyB7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5hIHtcclxuXHRtYXJnaW4tbGVmdDoxMHB4O1xyXG59XHJcblxyXG4uYnJlYWRjcnVtYiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Zm9udC1zaXplOiAxLjJlbTtcclxuXHRwYWRkaW5nOiAwcHg7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/links/links.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/links/links.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row links\">\r\n    <ol class=\"breadcrumb\">\r\n        <li class=\"breadcrumb-item\">\r\n            <i class=\"fa fa-file\"></i>\r\n            <a href=\"https://drive.google.com/file/d/1-JRCOPVoJfDBT--bKvNemBNGz9sNvpuz/view?usp=sharing\" target=\"_blank\">My Resume</a>\r\n        </li>\r\n        <li class=\"breadcrumb-item\">\r\n            <i class=\"fa fa-github\"></i>\r\n            <a href=\"https://github.com/pwnedpixel\" target=\"_blank\">Github</a>\r\n        </li>\r\n        <li class=\"breadcrumb-item\">\r\n            <i class=\"fa fa-folder-open\"></i>\r\n            <a href=\"https://devpost.com/pwnedpixel\" target=\"_blank\">Projects</a>\r\n        </li>\r\n        <li class=\"breadcrumb-item\">\r\n            <i class=\"fa fa-linkedin\"></i>\r\n            <a href=\"https://www.linkedin.com/in/arkeech/\" target=\"_blank\">LinkedIn</a>\r\n        </li>\r\n        <li class=\"breadcrumb-item\">\r\n            <i class=\"fa fa-envelope\"></i>\r\n            <a href=\"mailto:andy@akeech.com\" target=\"_blank\">andy@akeech.com</a>\r\n        </li>\r\n    </ol>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/links/links.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/links/links.component.ts ***!
  \***********************************************/
/*! exports provided: LinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksComponent", function() { return LinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LinksComponent = /** @class */ (function () {
    function LinksComponent() {
    }
    LinksComponent.prototype.ngOnInit = function () {
    };
    LinksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-links',
            template: __webpack_require__(/*! ./links.component.html */ "./src/app/home/links/links.component.html"),
            styles: [__webpack_require__(/*! ./links.component.css */ "./src/app/home/links/links.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LinksComponent);
    return LinksComponent;
}());



/***/ }),

/***/ "./src/app/home/projects/projects.component.css":
/*!******************************************************!*\
  !*** ./src/app/home/projects/projects.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* mat-divider {\r\n\tmargin-bottom:20px !important;\r\n} */\r\n\r\n.project-image-container {\r\n    float: left;\r\n    padding: 20px;\r\n    transition: padding 0.2s ease-in-out;\r\n    text-align: center;\r\n    position: relative;\r\n}\r\n\r\n.project-image-container:hover {\r\n    padding: 0px;\r\n}\r\n\r\nmat-card {\r\n    padding: 0px !important;\r\n    background: none;\r\n}\r\n\r\n.project-image {\r\n    width: 100%;\r\n}\r\n\r\n.project-image-container:hover .project-image {\r\n    -webkit-filter: brightness(20%);\r\n            filter: brightness(20%);\r\n}\r\n\r\n.projects {\r\n    display: flex;\r\n}\r\n\r\n.centered {\r\n    position: absolute;\r\n\ttop: 50%;\r\n\t-webkit-transform: translateY(calc(-50% + 20px));\r\n\t        transform: translateY(calc(-50% + 20px));\r\n    color: white;\r\n\ttext-align: center;\r\n\tpadding-right:5%;\r\n}\r\n\r\n.project-image-container .centered {\r\n\ttransition: opacity 0s ease-out;\r\n    opacity: 0;\r\n}\r\n\r\n.project-image-container:hover .centered {\r\n\topacity: 1;\r\n\ttransition: opacity 0.1s ease-in 0.2s;\r\n}\r\n\r\n.more-info-button {\r\n\tmargin-left: 35px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOztBQUVIO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksK0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7Q0FDckIsUUFBUTtDQUNSLGdEQUF3QztTQUF4Qyx3Q0FBd0M7SUFDckMsWUFBWTtDQUNmLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQywrQkFBK0I7SUFDNUIsVUFBVTtBQUNkOztBQUVBO0NBQ0MsVUFBVTtDQUNWLHFDQUFxQztBQUN0Qzs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIG1hdC1kaXZpZGVyIHtcclxuXHRtYXJnaW4tYm90dG9tOjIwcHggIWltcG9ydGFudDtcclxufSAqL1xyXG5cclxuLnByb2plY3QtaW1hZ2UtY29udGFpbmVyIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHRyYW5zaXRpb246IHBhZGRpbmcgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnByb2plY3QtaW1hZ2UtY29udGFpbmVyOmhvdmVyIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4ucHJvamVjdC1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnByb2plY3QtaW1hZ2UtY29udGFpbmVyOmhvdmVyIC5wcm9qZWN0LWltYWdlIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygyMCUpO1xyXG59XHJcblxyXG4ucHJvamVjdHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNlbnRlcmVkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYygtNTAlICsgMjBweCkpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwYWRkaW5nLXJpZ2h0OjUlO1xyXG59XHJcblxyXG4ucHJvamVjdC1pbWFnZS1jb250YWluZXIgLmNlbnRlcmVkIHtcclxuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDBzIGVhc2Utb3V0O1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLnByb2plY3QtaW1hZ2UtY29udGFpbmVyOmhvdmVyIC5jZW50ZXJlZCB7XHJcblx0b3BhY2l0eTogMTtcclxuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgZWFzZS1pbiAwLjJzO1xyXG59XHJcblxyXG4ubW9yZS1pbmZvLWJ1dHRvbiB7XHJcblx0bWFyZ2luLWxlZnQ6IDM1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/projects/projects.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/projects/projects.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-title\">Projects</div>\r\n<mat-card *ngIf=\"projects\">\r\n    <div class=\"row\">\r\n        <div class=\"project-image-container col-xl-4 col-lg-6 col-sm-12\" *ngFor=\"let project of projects.projects\">\r\n            <label>{{ project.title }}</label>\r\n            <img class=\"project-image\" src=\"{{ project.image }}\" />\r\n            <div class=\"centered\">\r\n                <ul>\r\n                    <li *ngFor=\"let item of project.info\">{{ item }}</li>\r\n                </ul>\r\n                <a href=\"{{ project.link }}\" target=\"_blank\"><button type=\"button\" class=\"btn btn-outline-light more-info-button\">More Info</button></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/home/projects/projects.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/projects/projects.component.ts ***!
  \*****************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(http) {
        var _this = this;
        this.http = http;
        this.getJSON().subscribe(function (data) {
            _this.buildProjects(data);
        });
    }
    ProjectsComponent.prototype.getJSON = function () {
        return this.http.get('./assets/content.json');
    };
    ProjectsComponent.prototype.buildProjects = function (data) {
        this.projects = data;
    };
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/home/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/home/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());

var Projects = /** @class */ (function () {
    function Projects() {
        this.projects = [];
    }
    Projects.prototype.getProjects = function () {
        return this.projects;
    };
    return Projects;
}());
var Project = /** @class */ (function () {
    function Project(title, subtitle, info) {
        if (info === void 0) { info = []; }
        this.title = title;
        this.subtitle = subtitle;
        this.info = info;
    }
    return Project;
}());


/***/ }),

/***/ "./src/app/home/skills/skills.component.css":
/*!**************************************************!*\
  !*** ./src/app/home/skills/skills.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".skills {\r\n\tfont-size: 1.2em;\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\ni {\r\n\tmargin-right:5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpbGxzIHtcclxuXHRmb250LXNpemU6IDEuMmVtO1xyXG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbmkge1xyXG5cdG1hcmdpbi1yaWdodDo1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/skills/skills.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/skills/skills.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"skills\">\r\n    <div class=\"section-title\">\r\n        Skills\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"row\" *ngFor=\"let skill of getSkills(0)\">\r\n                <div class=\"col-md-6 d-flex justify-content-lg-end\">\r\n                    {{skill.name}}\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <i *ngFor=\"let circle of skill.circles\" class=\"fa fa-circle{{circle!=='1'?'-o':''}}\"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"row\" *ngFor=\"let skill of getSkills(1)\">\r\n                <div class=\"col-md-6 d-flex justify-content-lg-end\">\r\n                    {{skill.name}}\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <i *ngFor=\"let circle of skill.circles\" class=\"fa fa-circle{{circle!=='1'?'-o':''}}\"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/skills/skills.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/skills/skills.component.ts ***!
  \*************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Skill = /** @class */ (function () {
    function Skill(name, level) {
        this.circles = [];
        this.name = name;
        for (var i = 0; i < level; i++) {
            this.circles.push('1');
        }
        for (var i = 5 - level; i > 0; i--) {
            this.circles.push('0');
        }
    }
    return Skill;
}());
var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
        this.skills = [];
    }
    SkillsComponent.prototype.getSkills = function (column) {
        var leftColumn = [];
        var rightColumn = [];
        var sortedSkills = this.skills.sort(function (sk1, sk2) {
            return sk2.level - sk1.level;
        });
        for (var i = 0; i < this.skills.length; i++) {
            if (i < this.skills.length / 2) {
                leftColumn.push(this.skills[i]);
            }
            else {
                rightColumn.push(this.skills[i]);
            }
        }
        return column === 0 ? leftColumn : rightColumn;
    };
    SkillsComponent.prototype.ngOnInit = function () {
        this.skills.push(new Skill('Python', 5));
        this.skills.push(new Skill('JavaScript/Typescript', 5));
        this.skills.push(new Skill('Git', 4));
        this.skills.push(new Skill('MongoDB', 4));
        this.skills.push(new Skill('React', 3));
        this.skills.push(new Skill('Kafka', 3));
        this.skills.push(new Skill('Java', 3));
        this.skills.push(new Skill('Maven', 2));
        this.skills.push(new Skill('SQL', 2));
        this.skills.push(new Skill('C# & C++', 1));
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/home/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/home/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/home/work-experience/work-experience.component.css":
/*!********************************************************************!*\
  !*** ./src/app/home/work-experience/work-experience.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".experience-divider {\r\n\tmargin-bottom: 20px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS93b3JrLWV4cGVyaWVuY2Uvd29yay1leHBlcmllbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyw4QkFBOEI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9ob21lL3dvcmstZXhwZXJpZW5jZS93b3JrLWV4cGVyaWVuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBlcmllbmNlLWRpdmlkZXIge1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/work-experience/work-experience.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/home/work-experience/work-experience.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-title\">Work Experience</div>\n<mat-card>\n    <h4 class=\"card-title\">Alert Labs</h4>\n    <h6 class=\"card-subtitle mb-2\">Software Developer: Data Science | April 2021 - Present</h6>\n    <ul>\n\t\t<li>Designing, implementing and maintaining a modular, scalable analytics platform.</li>\n\t\t<li>Used a mix of Python, JS/node, and Kafka to handle data streams from thousands of sensors.</li>\n\t\t<li>Researching and developing new analytics rules to delivervalue to customers</li>\n    </ul>\n    <mat-divider class=\"experience-divider\" [inset]=\"true\"></mat-divider>\n    <h6 class=\"card-subtitle mb-2\">Software Developer: Full-Stack | July 2019 - April 2021</h6>\n    <ul>\n\t\t<li>Built web applications that present analytics information clearly to customers using AngularJS and React</li>\n\t\t<li>Designing and implementing scalable and performant backend services using Javascript, Typescript, nodeJS, and mongoDB</li>\n\t\t<li>Member of a small, fast-paced team with frequent code deployments</li>\n\t\t<li>Led a project that resulted in a 10x performance improvement in a major backend component</li>\n    </ul>\n    <mat-divider class=\"experience-divider\" [inset]=\"true\"></mat-divider>\n    <h4 class=\"card-title\">TD Bank</h4>\n    <h6 class=\"card-subtitle mb-2\">Full-Stack Developer | May 2017 - August 2018</h6>\n    <ul>\n        <li>Gained Experience with Agile Development Methodology</li>\n        <li>Developer as part of a SCRUM pod for a 12-month web development project</li>\n        <li>Used Angular & redux to build front-end web applications. Java Spring, maven & MSSQL backend, running on JBoss 6.4 Application servers</li>\n        <li>Deployed dev builds to cloud environments. Completed unit testing with JUnit and Jasmine.</li>\n    </ul>\n    <mat-divider class=\"experience-divider\" [inset]=\"true\"></mat-divider>\n    <h4 class=\"card-title\">StratITgy Solutions</h4>\n    <h6 class=\"card-subtitle mb-2\">System Integration | November 2017 - August 2018</h6>\n    <ul>\n        <li>Lead integration resource on an implementation consulting team</li>\n\t\t<li>Led technical integration of customer global ERP systems and cloud based SalesForce.com</li>\n\t\t<li>Architected platform to complete data migration and enable continuous data integration</li>\n    </ul>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/home/work-experience/work-experience.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/work-experience/work-experience.component.ts ***!
  \*******************************************************************/
/*! exports provided: WorkExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkExperienceComponent", function() { return WorkExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkExperienceComponent = /** @class */ (function () {
    function WorkExperienceComponent() {
    }
    WorkExperienceComponent.prototype.ngOnInit = function () {
    };
    WorkExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work-experience',
            template: __webpack_require__(/*! ./work-experience.component.html */ "./src/app/home/work-experience/work-experience.component.html"),
            styles: [__webpack_require__(/*! ./work-experience.component.css */ "./src/app/home/work-experience/work-experience.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkExperienceComponent);
    return WorkExperienceComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\andyk\Documents\git\andy-website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map