
// imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './data/in-memory-data.service';

// dependencies
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

// components
import { AppComponent } from './app.component';
import { appRouterProviders } from './routes/app.routes';

bootstrap(AppComponent, [
    appRouterProviders,
    HTTP_PROVIDERS,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA, useClass: InMemoryDataService } // in-mem server data
]);
