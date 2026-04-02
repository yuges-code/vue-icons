import { type App } from 'vue';
import { install } from './helpers/install';

import * as icons from './icons';
import * as components from './components';

const VueIcons = {
    install: (app: App) => install(app, {...components, ...icons}),
};

export default VueIcons;

export * from './types';
export * from './icons';
export * from './components';
