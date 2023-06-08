import { type FacadeModule, type FacadeContext } from '../../interfaces.js';

export interface FacadeStatusContext extends FacadeContext { }

export type FacadeStatusModule = FacadeModule<FacadeStatusContext>;
