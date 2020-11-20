import { ExtractModuleContext, Facade, FacadeModule, FacadeModuleFactory } from './interfaces';

export type FacadeModuleFactoryCb<TConfig, TModule extends FacadeModule> = (facade: Facade<[TModule]>, config: TConfig) => void;

export function createFacadeModuleFactory<TConfig = any, TModule extends FacadeModule = FacadeModule>(moduleName: string, fn: FacadeModuleFactoryCb<TConfig, TModule>)  {
  const facadeModuleFactory: FacadeModuleFactory<TConfig, ExtractModuleContext<TModule>> = (config) => {
    const facadeModule = ((facade) => fn(facade, config)) as TModule;
    facadeModule.moduleName = moduleName;
    return facadeModule;
  }
  facadeModuleFactory.moduleName = moduleName;
  return facadeModuleFactory;
}

export type FacadeModuleCb<TModule extends FacadeModule> = (facade: Facade<[TModule]>) => void;

export function createFacadeModule<TModule extends FacadeModule = FacadeModule>(moduleName: string, module: FacadeModuleCb<TModule>): TModule  {
  const facadeModule = ((facade: any) => module(facade)) as TModule;
  facadeModule.moduleName = moduleName;
  return facadeModule;
}
