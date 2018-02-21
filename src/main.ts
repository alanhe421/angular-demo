import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
    // add Google Analytics script to <head>
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=UA-xxxxxxx-1';
    const script2 = document.createElement('script');
    script2.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-xxxxxxx-1');
  `;
    document.head.appendChild(script1);
    document.head.appendChild(script2);

    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
