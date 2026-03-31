<script setup lang="ts">
    import type { IconProps } from '../../../../types/IconProps';

    defineOptions({
        name: 'YIconMenuDynamic',
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
        <path d="M8 16H40" stroke-linecap="round" :stroke="color"/>
        <path d="M8 32H40" stroke-linecap="round" :stroke="color"/>
    </svg>
</template>
