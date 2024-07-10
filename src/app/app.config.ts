import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideAnimations } from '@angular/platform-browser/animations';

const firebaseConfig = {
  apiKey: "AIzaSyCt4vKzhHahPU7XBxYBwn-o1ZP6tWktTw4",
  authDomain: "angular-kanban-2b541.firebaseapp.com",
  projectId: "angular-kanban-2b541",
  storageBucket: "angular-kanban-2b541.appspot.com",
  messagingSenderId: "1044703582300",
  appId: "1:1044703582300:web:c6cad40c2788b7341c6e99"
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideAnimations()
  ]
};
