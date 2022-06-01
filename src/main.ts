import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

(window as Record<string, any>)['CESIUM_BASE_URL'] = '/assets/mars3d-cesium/';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
