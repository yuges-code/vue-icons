<script setup lang="ts">
    import { Icons, IconType } from '@yuges/icons';
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
        suspensible: true,
        errorComponent: YIconError,
        loadingComponent: YIconLoading,
    });

    const icon = computed(() => Icons.find(icon => icon.name.kebab === props.name));

    const iconComponent = computed(() => {
        if (! icon.value) {
            return
        }

        const name = icon.value.name.pascal;

        const loader = () => import(`../../../icons/${props.type}/${name}/src/Index.vue`)
            .catch((error) => {
                console.warn(`Icon "${name}" not found:`, error);

                throw error;
            });

        return defineAsyncComponent({
            loader: loader,
            delay: props.delay,
            timeout: props.timeout,
            suspensible: props.suspensible,
            errorComponent: props.errorComponent,
            loadingComponent: props.loadingComponent,
        });
    })
</script>

<template>
    <Suspense
        :timeout="timeout"
        :suspensible="suspensible"
    >
        <component
            :fill="fill"
            :xmlns="xmlns"
            :color="color"
            :width="width"
            :height="height"
            :view-box="viewBox"
            :stroke-width="strokeWidth"

            v-bind="$attrs"
            :is="iconComponent"
            v-if="iconComponent"
        >
            <slot></slot>
        </component>
        <template #fallback>
            <component :is="loadingComponent" v-if="loadingComponent"/>
        </template>
    </Suspense>
</template>
