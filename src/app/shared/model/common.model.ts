export interface CommonModel {
    targetUrl: string;
    success: boolean;
    error: any;
    unAuthorizedRequest: boolean;
    __abp: boolean;
}

export interface UserPreferences extends CommonModel {
    result: userPreferenceConfig;
}
export interface userPreferenceConfig {
    preset: string;
    primary: string;
    surface: string;
    darkTheme: boolean;
    menuMode: string;
    userId?: string;
}
