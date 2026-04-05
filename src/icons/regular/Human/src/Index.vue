<script setup lang="ts">
    import type { IconProps } from '../../../../types/IconProps';

    defineOptions({
        name: 'YIconHumanRegular',
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
        <path d="M10 40C10 34.4772 14.4772 30 20 30H28C33.5228 30 38 34.4772 38 40" stroke-linecap="round" stroke-linejoin="round" :stroke="color"/>
        <path d="M13 19C13 12.9249 17.9249 8 24 8C30.0751 8 35 12.9249 35 19C35 25.0751 30.0751 30 24 30C17.9249 30 13 25.0751 13 19Z" stroke-linecap="round" stroke-linejoin="round" :stroke="color"/>
        <slot></slot>
    </svg>
</template>
