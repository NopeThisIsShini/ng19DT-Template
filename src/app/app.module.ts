import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';

// prime ng theme
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { baseUrlInterceptor } from './utils/interceptor/base-url.interceptor';
import { authInterceptor } from './utils/interceptor/auth.interceptor';
@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, ToastModule],
    providers: [
        MessageService, // prime ng message service
        provideRouter(routes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }), withEnabledBlockingInitialNavigation()),
        provideHttpClient(withFetch(), withInterceptors([baseUrlInterceptor, authInterceptor])),
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura,
                options: {
                    prefix: 'p',
                    darkModeSelector: '.app-dark',
                    // darkModeSelector: '.my-app-dark' // if need toggle dark mode
                    cssLayer: {
                        name: 'primeng',
                        order: 'app-styles, primeng, another-css-library'
                    }
                }
            },
            inputVariant: 'outlined', // outlined , filled
            ripple: true,
            zIndex: {
                modal: 1100, // dialog, sidebar
                overlay: 1000, // dropdown, overlaypanel
                menu: 1000, // overlay menus
                tooltip: 1100 // tooltip
            },
            translation: {
                accept: 'Aceptar',
                reject: 'Rechazar'
                //translations
            }
        })
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
