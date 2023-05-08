import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLicense } from '@syncfusion/ej2-base';

import { AppModule } from './app/app.module';

registerLicense('Mgo+DSMBaFt+QHFqVkNrXVNbdV5dVGpAd0N3RGlcdlR1fUUmHVdTRHRcQllhT39TckxiUX9deXY=;Mgo+DSMBPh8sVXJ1S0d+X1RPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSXpRcERjXXZfeHRQQmI=;ORg4AjUWIQA/Gnt2VFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5XdENiWXtXcXxVQWBe;MTg0OTUyMEAzMjMxMmUzMTJlMzMzNUVlWk1ML09iVlVud3hjUEhrL1BOeWJPK0pJb2N0WUhBV0hFNmlCay9xR289;MTg0OTUyMUAzMjMxMmUzMTJlMzMzNUZvR0FnQytIaEhERURZdFVVZFNhU0g5UnFUTnN2NGZSbm5iNDhxTUkzM2c9;NRAiBiAaIQQuGjN/V0d+XU9Hc1RDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TckdlWH9aeXVdR2RVUw==;MTg0OTUyM0AzMjMxMmUzMTJlMzMzNVFIeWhSdnJIcjQ2Y2IxdVQ5OHJ6bmRRR1ByV2JVeHB3TE9pUVQ5akZwZWM9;MTg0OTUyNEAzMjMxMmUzMTJlMzMzNWVWMU1EZDlDdFhxSVdEWUI5WDFIZ2dyRldNUGd6U094MWI0NlhWeElVRG89;Mgo+DSMBMAY9C3t2VFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5XdENiWXtXcXxXR2le;MTg0OTUyNkAzMjMxMmUzMTJlMzMzNUJhdllHRWJsSU9keEtvMWYreURtUWM5VWFYNGtnZGZzcExaWjNyNE5tdFk9;MTg0OTUyN0AzMjMxMmUzMTJlMzMzNVRJc1pMaHdIRm5nc3VrV2tBTnZ4SDV4dFI1NSsyUjJTaDNzOGdORDlzQTQ9;MTg0OTUyOEAzMjMxMmUzMTJlMzMzNVFIeWhSdnJIcjQ2Y2IxdVQ5OHJ6bmRRR1ByV2JVeHB3TE9pUVQ5akZwZWM9Mgo+DSMBaFt+QHFqVkNrXVNbdV5dVGpAd0N3RGlcdlR1fUUmHVdTRHRcQllhT39TckxiUX9deXY=;Mgo+DSMBPh8sVXJ1S0d+X1RPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSXpRcERjXXZfeHRQQmI=;ORg4AjUWIQA/Gnt2VFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5XdENiWXtXcXxVQWBe;MTg0OTUyMEAzMjMxMmUzMTJlMzMzNUVlWk1ML09iVlVud3hjUEhrL1BOeWJPK0pJb2N0WUhBV0hFNmlCay9xR289;MTg0OTUyMUAzMjMxMmUzMTJlMzMzNUZvR0FnQytIaEhERURZdFVVZFNhU0g5UnFUTnN2NGZSbm5iNDhxTUkzM2c9;NRAiBiAaIQQuGjN/V0d+XU9Hc1RDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TckdlWH9aeXVdR2RVUw==;MTg0OTUyM0AzMjMxMmUzMTJlMzMzNVFIeWhSdnJIcjQ2Y2IxdVQ5OHJ6bmRRR1ByV2JVeHB3TE9pUVQ5akZwZWM9;MTg0OTUyNEAzMjMxMmUzMTJlMzMzNWVWMU1EZDlDdFhxSVdEWUI5WDFIZ2dyRldNUGd6U094MWI0NlhWeElVRG89;Mgo+DSMBMAY9C3t2VFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5XdENiWXtXcXxXR2le;MTg0OTUyNkAzMjMxMmUzMTJlMzMzNUJhdllHRWJsSU9keEtvMWYreURtUWM5VWFYNGtnZGZzcExaWjNyNE5tdFk9;MTg0OTUyN0AzMjMxMmUzMTJlMzMzNVRJc1pMaHdIRm5nc3VrV2tBTnZ4SDV4dFI1NSsyUjJTaDNzOGdORDlzQTQ9;MTg0OTUyOEAzMjMxMmUzMTJlMzMzNVFIeWhSdnJIcjQ2Y2IxdVQ5OHJ6bmRRR1ByV2JVeHB3TE9pUVQ5akZwZWM9');
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
