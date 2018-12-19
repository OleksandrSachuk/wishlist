import config from './config';

export const isDevelopment = process.env.NODE_ENV === 'development';
export const isEnableLogs = config.enable_logs;
export const isEnableDevtools = config.enable_devtools;
export const isEnableUpdateAnalytics = config.enable_update_analytics;
