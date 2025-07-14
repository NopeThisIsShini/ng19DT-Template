import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { MenuModule } from 'primeng/menu';
import { AppConfigurator } from './app.configurator';
import { LayoutService } from '../service/layout.service';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { NotificationsComponent } from './notifications/notifications.component';
@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator, MenuModule, AvatarModule, OverlayBadgeModule],
    template: `<div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
                <i class="pi pi-align-left"></i>
            </button>
            <a class="layout-topbar-logo" routerLink="/">
                <img class="h-9 w-9" src="assets/images/angular.svg" alt="logo" />
                <span class="max-sm:hidden">TEMPLATE</span>
            </a>
        </div>

        <div class="layout-topbar-actions">
            <div class="layout-config-menu">
                <div class="relative">
                    <button class="layout-topbar-action " (click)="handleSetting(true)">
                        <i class="pi pi-cog"></i>
                    </button>
                    <app-configurator [openSetting]="visible" (onSettingChange)="handleSetting(false)" />
                </div>

                <button type="button" class="layout-topbar-action">
                    <p-overlaybadge value="2" badgeSize="small" severity="danger">
                        <i class="pi pi-bell"></i>
                    </p-overlaybadge>
                </button>

                <!-- <button type="button" class="layout-topbar-action" (click)="menu.toggle($event)"> -->
                <div class="layout-topbar-action-profile" (click)="menu.toggle($event)">
                    <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" size="large" shape="circle" />
                </div>
            </div>

            <p-menu #menu [popup]="true" [model]="items" class="flex justify-center" styleClass="w-full md:w-60">
                <ng-template #start>
                    <span class="inline-flex items-center gap-1 px-2 py-2">
                        <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="block mx-auto">
                            <path d="..." fill="var(--primary-color)" />
                        </svg>
                        <span class="text-xl font-semibold"> PRIME<span class="text-primary">APP</span> </span>
                    </span>
                </ng-template>
                <ng-template #submenuheader let-item>
                    <span class="text-primary font-bold">{{ item.label }}</span>
                </ng-template>
                <ng-template #item let-item>
                    <a pRipple class="flex items-center p-menu-item-link">
                        <span [class]="item.icon"></span>
                        <span class="ml-2">{{ item.label }}</span>
                        <!-- <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge" /> -->
                        <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">
                            {{ item.shortcut }}
                        </span>
                    </a>
                </ng-template>
                <ng-template #end>
                    <button pRipple class="relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-none cursor-pointer transition-colors duration-200">
                        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" class="mr-2" shape="circle" />
                        <span class="inline-flex flex-col">
                            <span class="font-bold">Amy Elsner</span>
                            <span class="text-sm">Admin</span>
                        </span>
                    </button>
                </ng-template>
            </p-menu>
        </div>
    </div>`
})
export class AppTopbar implements OnInit {
    userName = 'John Doe';
    userImage = 'assets/images/avatar/1.png';
    items!: MenuItem[];
    visible: boolean = false;

    constructor(public layoutService: LayoutService) {}
    ngOnInit(): void {
        this.items = [
            {
                separator: true
            },
            {
                label: 'Documents',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-plus',
                        shortcut: '⌘+N'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-search',
                        shortcut: '⌘+S'
                    }
                ]
            },
            {
                label: 'Profile',
                items: [
                    {
                        label: 'Settings',
                        icon: 'pi pi-cog',
                        shortcut: '⌘+O'
                    },
                    {
                        label: 'Messages',
                        icon: 'pi pi-inbox',
                        badge: '2'
                    },
                    {
                        label: 'Logout',
                        icon: 'pi pi-sign-out',
                        shortcut: '⌘+Q'
                    }
                ]
            },
            {
                separator: true
            }
        ];
    }

    handleSetting(open: boolean) {
        this.visible = open;
    }
}
