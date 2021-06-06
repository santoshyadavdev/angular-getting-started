import { InjectionToken } from '@angular/core';
import { environment } from '../../environments/environment';
import { AppConfig } from './app.config';

export const APPCONFIG = new InjectionToken<AppConfig>('');

export const CONFIGVALUES: AppConfig = {
  apiKey: environment.stripe_api_key,
  backendUrl: '',
};
