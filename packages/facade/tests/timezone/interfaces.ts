import { TimezoneService } from "@restorecommerce/rc-grpc-clients";
import { FacadeContext, FacadeModule } from "../../src";

export interface TimezoneConfig {
  timezoneService: TimezoneService;
}

export interface TimezoneContext extends FacadeContext {
  timezoneService: TimezoneService;
};

export type TimezoneModule = FacadeModule<TimezoneContext>;
