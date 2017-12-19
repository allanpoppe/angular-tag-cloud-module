webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <angular-tag-cloud\r\n    [data]=\"data\"\r\n    [width]=\"options.width\"\r\n    [height]=\"options.height\"\r\n    [overflow]=\"options.overflow\"\r\n    (clicked)=\"log('clicked', $event)\"\r\n    (afterInit)=\"log('After Init', $event)\"\r\n    (afterChecked)=\"log('After Checked', $event)\">\r\n  </angular-tag-cloud>\r\n</div>\r\n\r\n<button (click)=\"newDateFromObservable()\">Get new Data from Observable</button>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = (function () {
    function AppComponent() {
        this.options = {
            width: 1,
            height: 400,
            overflow: false,
        };
        this.data = [
            { text: 'Weight-10-link-color', weight: 10, link: 'https://google.com', color: '#ffaaee' },
            { text: 'Weight-10-link', weight: 10, link: 'https://google.com' },
            { text: 'Weight-10', weight: 10 },
            { text: 'Weight-9-link-color', weight: 9, link: 'https://google.com', color: 'red' },
            { text: 'Weight-9-link', weight: 9, link: 'https://google.com' },
            { text: 'Weight-9', weight: 9 },
            { text: 'Weight-8-link-color', weight: 8, link: 'https://google.com', color: 'green' },
            { text: 'Weight-8-link', weight: 8, link: 'https://google.com' },
            { text: 'Weight-8', weight: 8 },
            { text: 'Weight-7-link-color', weight: 7, link: 'https://google.com', color: '#aaa' },
            { text: 'Weight-7-link-external', weight: 7, link: 'https://google.com', external: true },
            { text: 'Weight-7', weight: 7 },
            { text: 'Weight-6-link-color', weight: 6, link: 'https://google.com', color: '#ddd' },
            { text: 'Weight-6-link', weight: 6, link: 'https://google.com' },
            { text: 'Weight-6', weight: 6.4 },
            { text: 'Weight-5-link-color', weight: 5, link: 'https://google.com', color: 'yellow' },
            { text: 'Weight-5-link', weight: 5, link: 'https://google.com' },
            { text: 'Weight-5', weight: 5 },
            { text: 'Weight-4-link-color-external', weight: 4, link: 'https://google.com', color: '#ddd', external: true },
            { text: 'Weight-4-link', weight: 4, link: 'https://google.com' },
            { text: 'Weight-4', weight: 4 },
            { text: 'Weight-3-link-color', weight: 3, link: 'https://google.com', color: '#0f0' },
            { text: 'Weight-3-link', weight: 3, link: 'https://google.com' },
            { text: 'Weight-3', weight: 3 },
            { text: 'Weight-2-link-color', weight: 2, link: 'https://google.com', color: 'olive' },
            { text: 'Weight-2-link', weight: 2, link: 'https://google.com' },
            { text: 'Weight-2', weight: 2 },
            { text: 'Weight-1-link-color', weight: 1, link: 'https://google.com', color: 'purple' },
            { text: 'Weight-1-link', weight: 1, link: 'https://google.com' },
            { text: 'Weight-1', weight: 1 }
        ];
        this.dataStrict = [
            { text: 'Weight-10-link-color', weight: 10, link: 'https://google.com', color: '#ffaaee' }
        ];
    }
    AppComponent.prototype.newDateFromObservable = function () {
        var _this = this;
        var changedData$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of([
            { text: 'Weight-10-link-color', weight: 8, link: 'https://google.com', color: '#ffaaee' },
            { text: 'Weight-10-link', weight: 10, link: 'https://google.com' }
        ]);
        changedData$.subscribe(function (res) { return _this.data = res; });
    };
    AppComponent.prototype.log = function (eventType, e) {
        console.log(eventType, e);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tag_cloud_module__ = __webpack_require__("../../../../../src/app/tag-cloud-module/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__tag_cloud_module__["a" /* TagCloudModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/tag-cloud-module/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tag_cloud_module__ = __webpack_require__("../../../../../src/app/tag-cloud-module/tag-cloud.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__tag_cloud_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tag_cloud_component__ = __webpack_require__("../../../../../src/app/tag-cloud-module/tag-cloud.component.ts");
/* unused harmony namespace reexport */




/***/ }),

/***/ "../../../../../src/app/tag-cloud-module/tag-cloud.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagCloudComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TagCloudComponent = (function () {
    function TagCloudComponent(el, renderer, r2, sanitizer) {
        this.el = el;
        this.renderer = renderer;
        this.r2 = r2;
        this.sanitizer = sanitizer;
        this.clicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.afterInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.afterChecked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.alreadyPlacedWords = [];
    }
    TagCloudComponent.prototype.ngOnChanges = function (changes) {
        // values changed, reset cloud
        this.el.nativeElement.innerHTML = '';
        // set value changes8
        if (changes['data']) {
            this.dataArr = changes['data'].currentValue;
        }
        var width = this.width;
        if (this.el.nativeElement.parentNode.offsetWidth > 0
            && width <= 1
            && width > 0) {
            width = this.el.nativeElement.parentNode.offsetWidth * width;
        }
        // set options
        this.options = {
            step: 2.0,
            aspectRatio: (width / this.height),
            width: width,
            height: this.height,
            center: {
                x: (width / 2.0),
                y: (this.height / 2.0)
            },
            overflow: this.overflow
        };
        this.r2.setStyle(this.el.nativeElement, 'width', this.options.width + 'px');
        this.r2.setStyle(this.el.nativeElement, 'height', this.options.height + 'px');
        // draw the cloud
        this.drawWordCloud();
    };
    TagCloudComponent.prototype.ngOnInit = function () {
        if (!this.data) {
            console.error('angular-tag-cloud: No data passed. Please pass an Array of CloudData');
            return;
        }
        if (!this.width) {
            this.width = 500;
        }
        if (!this.height) {
            this.height = 300;
        }
        if (!this.overflow) {
            this.overflow = true;
        }
        if (!this.strict) {
            this.strict = false;
        }
        this.r2.setStyle(this.el.nativeElement, 'width', this.options.width + 'px');
        this.r2.setStyle(this.el.nativeElement, 'height', this.options.height + 'px');
    };
    TagCloudComponent.prototype.ngAfterContentInit = function () {
        this.afterInit.emit();
    };
    TagCloudComponent.prototype.ngAfterContentChecked = function () {
        this.afterChecked.emit();
    };
    TagCloudComponent.prototype.drawWordCloud = function () {
        var _this = this;
        // Sort this.dataArr from the word with the highest weight to the one with the lowest
        this.dataArr.sort(function (a, b) { return b.weight - a.weight; });
        this.dataArr.forEach(function (elem, index) {
            _this.drawWord(index, elem);
        });
    };
    // Helper function to test if an element overlaps others
    TagCloudComponent.prototype.hitTest = function (currentEl, otherEl) {
        // Check elements for overlap one by one, stop and return false as soon as an overlap is found
        for (var i = 0; i < otherEl.length; i++) {
            if (this.overlapping(currentEl, otherEl[i])) {
                return true;
            }
        }
        return false;
    };
    // Pairwise overlap detection
    TagCloudComponent.prototype.overlapping = function (a, b) {
        return (Math.abs(2.0 * a.offsetLeft + a.offsetWidth - 2.0 * b.offsetLeft - b.offsetWidth) < a.offsetWidth + b.offsetWidth &&
            Math.abs(2.0 * a.offsetTop + a.offsetHeight - 2.0 * b.offsetTop - b.offsetHeight) < a.offsetHeight + b.offsetHeight)
            ? true : false;
    };
    // Function to draw a word, by moving it in spiral until it finds a suitable empty place. This will be iterated on each word.
    TagCloudComponent.prototype.drawWord = function (index, word) {
        // Define the ID attribute of the span that will wrap the word
        var angle = 6.28 * Math.random(), radius = 0.0, weight = 5, wordSpan;
        // Check if min(weight) > max(weight) otherwise use default
        if (this.dataArr[0].weight > this.dataArr[this.dataArr.length - 1].weight) {
            // check if strict mode is active
            if (!this.strict) {
                weight = Math.round((word.weight - this.dataArr[this.dataArr.length - 1].weight) /
                    (this.dataArr[0].weight - this.dataArr[this.dataArr.length - 1].weight) * 9.0) + 1;
            }
            else {
                // fallback to 10
                if (word.weight > 10) {
                    weight = 10;
                    console.log("[TagCloud strict] Weight property " + word.weight + " > 10. Fallback to 10 as you are using strict mode", word);
                }
                else if (word.weight < 1) {
                    weight = 1;
                    console.log("[TagCloud strict] Given weight property " + word.weight + " < 1. Fallback to 1 as you are using strict mode", word);
                }
                else if (word.weight % 1 !== 0) {
                    weight = Math.round(word.weight);
                    console.log("[TagCloud strict] Given weight property " + word.weight + " is not an integer. Rounded value to " + weight, word);
                }
                else {
                    weight = word.weight;
                }
            }
        }
        // Create a new span and insert node.
        wordSpan = this.r2.createElement('span');
        wordSpan.className = 'w' + weight;
        var thatClicked = this.clicked;
        wordSpan.onclick = function () {
            thatClicked.emit(word);
        };
        var node = this.r2.createText(word.text);
        // set color
        if (word.color) {
            this.r2.setStyle(wordSpan, 'color', word.color);
        }
        // Append href if there's a link alongwith the tag
        if (word.link) {
            var wordLink = this.r2.createElement('a');
            wordLink.href = word.link;
            if (word.external !== undefined && word.external) {
                wordLink.target = '_blank';
            }
            wordLink.appendChild(node);
            node = wordLink;
        }
        wordSpan.appendChild(node);
        this.r2.appendChild(this.el.nativeElement, wordSpan);
        var width = wordSpan.offsetWidth;
        var height = wordSpan.offsetHeight;
        var left = this.options.center.x;
        var top = this.options.center.y;
        // Save a reference to the style property, for better performance
        var wordStyle = wordSpan.style;
        wordStyle.position = 'absolute';
        // place the first word
        wordStyle.left = left + 'px';
        wordStyle.top = top + 'px';
        while (this.hitTest(wordSpan, this.alreadyPlacedWords)) {
            radius += this.options.step;
            angle += (index % 2 === 0 ? 1 : -1) * this.options.step;
            left = this.options.center.x - (width / 2.0) + (radius * Math.cos(angle)) * this.options.aspectRatio;
            top = this.options.center.y + radius * Math.sin(angle) - (height / 2.0);
            wordStyle.left = left + 'px';
            wordStyle.top = top + 'px';
        }
        // Don't render word if part of it would be outside the container
        if (!this.options.overflow &&
            (left < 0 || top < 0 || (left + width) > this.options.width ||
                (top + height) > this.options.height)) {
            wordSpan.remove();
            return;
        }
        this.alreadyPlacedWords.push(wordSpan);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], TagCloudComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], TagCloudComponent.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], TagCloudComponent.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TagCloudComponent.prototype, "overflow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TagCloudComponent.prototype, "strict", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TagCloudComponent.prototype, "clicked", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TagCloudComponent.prototype, "afterInit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TagCloudComponent.prototype, "afterChecked", void 0);
    TagCloudComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'angular-tag-cloud',
            template: '',
            styles: ["\n    /* fonts */\n    :host {\n      font-family: \"Helvetica\", \"Arial\", sans-serif;\n      font-size: 10px;\n      line-height: normal;\n    }\n    :host /deep/ a:host {\n      font-size: inherit;\n      text-decoration: none;\n    }\n    :host /deep/ span.w10 { font-size: 550%; }\n    :host /deep/ span.w9 { font-size: 500%; }\n    :host /deep/ span.w8 { font-size: 450%; }\n    :host /deep/ span.w7 { font-size: 400%; }\n    :host /deep/ span.w6 { font-size: 350%; }\n    :host /deep/ span.w5 { font-size: 300%; }\n    :host /deep/ span.w4 { font-size: 250%; }\n    :host /deep/ span.w3 { font-size: 200%; }\n    :host /deep/ span.w2 { font-size: 150%; }\n    :host /deep/ span.w1 { font-size: 100%; }\n\n    /* colors */\n    :host /deep/ a { color: inherit; }\n    :host /deep/ a:hover { color: #0df; }\n    :host /deep/ a:hover { color: #0cf; }\n    :host /deep/ span.w10 { color: #0cf; }\n    :host /deep/ span.w9 { color: #0cf; }\n    :host /deep/ span.w8 { color: #0cf; }\n    :host /deep/ span.w7 { color: #39d; }\n    :host /deep/ span.w6 { color: #90c5f0; }\n    :host /deep/ span.w5 { color: #90a0dd; }\n    :host /deep/ span.w4 { color: #90c5f0; }\n    :host /deep/ span.w3 { color: #a0ddff; }\n    :host /deep/ span.w2 { color: #99ccee; }\n    :host /deep/ span.w1 { color: #aab5f0; }\n\n    /* layout */\n    :host {\n      color: #09f;\n      overflow: hidden;\n      position: relative;\n      display: block;\n    }\n    :host /deep/ span { padding: 0; }\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], TagCloudComponent);
    return TagCloudComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tag-cloud-module/tag-cloud.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagCloudModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tag_cloud_component__ = __webpack_require__("../../../../../src/app/tag-cloud-module/tag-cloud.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TagCloudModule = (function () {
    function TagCloudModule() {
    }
    TagCloudModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__tag_cloud_component__["a" /* TagCloudComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__tag_cloud_component__["a" /* TagCloudComponent */]]
        })
    ], TagCloudModule);
    return TagCloudModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map