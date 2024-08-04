<<<<<<< HEAD
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
=======
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

>>>>>>> c2f94a8 (fist commit)

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
