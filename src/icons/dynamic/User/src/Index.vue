<script setup lang="ts">
    import type { IconProps } from '../../../../types/IconProps';

    defineOptions({
        name: 'YIconUserDynamic',
    });

    withDefaults(defineProps<IconProps>(), {
        width: 48,
        height: 48,
        viewBox: '0 0 48 48',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        strokeWidth: 3,
        color: 'currentColor',
    });
</script>

<template>
    <svg
        :fill="fill"
        :color="color"
        :xmlns="xmlns"
        :width="width"
        :height="height"
        :viewBox="viewBox"
        :stroke-width="strokeWidth"
    >
        <path d="M10 40V38C10 30.268 16.268 24 24 24C31.732 24 38 30.268 38 38V40" stroke-linecap="round" stroke-linejoin="round" :stroke="color"/>
        <path d="M16 16C16 11.5817 19.5817 8 24 8C28.4183 8 32 11.5817 32 16C32 20.4183 28.4183 24 24 24C19.5817 24 16 20.4183 16 16Z" stroke-linecap="round" stroke-linejoin="round" :stroke="color"/>
    </svg>
</template>
