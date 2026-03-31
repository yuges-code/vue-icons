<script setup lang="ts">
    import { Icons, IconType } from '@yuges/icons';
    import { defineAsyncComponent, computed } from 'vue';

    const props = withDefaults(defineProps<{
        name: Icons['name']['kebab'],
        type: IconType,
    }>(), {
        name: 'seal',
        type: IconType.DYNAMIC,
    });

    const asyncComponentOptions = {
        loadingComponent: {
            template: '<span class="icon-loading">⌛</span>'
        },
        errorComponent: {
            template: '<span class="icon-error">⚠️</span>'
        },
        delay: 200,
        timeout: 3000
    }

    const iconComponent = computed(() => {
        if (! props.name) {
            return
        }

        const importer = () => {
            return import(`../../../icons/${props.type}/${props.name}/src/Index.vue`)
                .catch((error) => {
                    console.warn(`Icon "${props.name}" not found:`, error);

                    throw error;
                })
        }

        return defineAsyncComponent({
            loader: importer,
            ...asyncComponentOptions
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
