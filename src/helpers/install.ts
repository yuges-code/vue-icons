import { type App, type Component } from 'vue';

export function install (app: App, components: { [key: string]: Component }) {
    for (const key in components) {
        if (components[key]) {
            app.component(key, components[key]);
        }
    }
}
