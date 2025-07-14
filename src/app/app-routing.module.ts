import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayout } from './layout/component/app.layout';
import { local_routes } from './config/local.route';

export const routes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule) }
            // { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            // { path: 'documentation', component: Documentation },
            // { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
        ]
    },

    { path: local_routes.auth, loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthModule) },
    // { path: 'landing', component: Landing },
    // { path: 'notfound', component: Notfound },
    // { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
