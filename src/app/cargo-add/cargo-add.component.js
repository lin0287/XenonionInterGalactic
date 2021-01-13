"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CargoAddComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CargoAddComponent = /** @class */ (function () {
    function CargoAddComponent(fb) {
        this.fb = fb;
        this.createForm();
    }
    CargoAddComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            ProductName: ['', forms_1.Validators.required],
            ProductDescription: ['', forms_1.Validators.required],
            ProductPrice: ['', forms_1.Validators.required]
        });
    };
    CargoAddComponent.prototype.ngOnInit = function () {
    };
    CargoAddComponent = __decorate([
        core_1.Component({
            selector: 'app-cargo-add',
            templateUrl: './cargo-add.component.html',
            styleUrls: ['./cargo-add.component.css']
        })
    ], CargoAddComponent);
    return CargoAddComponent;
}());
exports.CargoAddComponent = CargoAddComponent;
