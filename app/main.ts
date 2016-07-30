
// dependencies
import { bootstrap }    from '@angular/platform-browser-dynamic';

// components
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

bootstrap(AppComponent, [
    appRouterProviders
]);
