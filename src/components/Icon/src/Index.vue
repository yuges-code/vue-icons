<script setup lang="ts">
    import { IconType } from '@yuges/icons';
    import { YIconError } from '../../Error';
    import { YIconLoading } from '../../Loading';
    import type { IconProps } from '../types/IconProps';
    import { defineAsyncComponent, computed } from 'vue';


    defineOptions({
        name: 'YIcon',
    });

    const props = withDefaults(defineProps<IconProps>(), {
        name: 'seal',
        type: IconType.DYNAMIC,
        delay: 200,
        timeout: 3000,
        errorComponent: YIconError,
        loadingComponent: YIconLoading,
    });

    function capitalize(string: string) {  
        return string.charAt(0).toUpperCase() + string.slice(1);  
    }

    const iconComponent = computed(() => {
        if (! props.name) {
            return
        }

        const importer = () => {
            return import(`./icons/${props.type}/${capitalize(props.name)}.js`)
                .catch((error) => {
                    console.warn(`Icon "${props.name}" not found:`, error);

                    throw error;
                })
        }

        return defineAsyncComponent({
            loader: importer,
            delay: props.delay,
            timeout: props.timeout,
            errorComponent: props.errorComponent,
            loadingComponent: props.loadingComponent,
        })
    })
</script>

<template>
    <component
        v-bind="$attrs"
        :is="iconComponent"
        v-if="iconComponent"
    />
</template>
