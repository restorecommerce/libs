"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFacadeModuleFactory = void 0;
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
