"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFacadeModule = exports.createFacadeModuleFactory = void 0;
;
;
;
function createFacadeModuleFactory(moduleName, fn) {
    const facadeModuleFactory = (config) => {
        const facadeModule = ((facade) => fn(facade, config));
        facadeModule.moduleName = moduleName;
        return facadeModule;
    };
    facadeModuleFactory.moduleName = moduleName;
    return facadeModuleFactory;
}
exports.createFacadeModuleFactory = createFacadeModuleFactory;
function createFacadeModule(moduleName, fn) {
    const facadeModule = ((facade) => fn(facade));
    facadeModule.moduleName = moduleName;
    return facadeModule;
}
exports.createFacadeModule = createFacadeModule;
