import { TimezoneService } from "@restorecommerce/rc-grpc-clients";
import { FacadeModule } from "../../src";

export interface TimezoneConfig {
  timezoneService: TimezoneService;
}

export interface TimezoneContext {
  timezoneService: TimezoneService;
};

export type TimezoneModule = FacadeModule<TimezoneContext>;
