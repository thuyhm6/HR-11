import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { patchNzOptionDebugValueAttribute } from './app/nz-option-debug.config';

patchNzOptionDebugValueAttribute();

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
