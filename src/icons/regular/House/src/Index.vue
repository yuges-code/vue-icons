<script setup lang="ts">
    import type { IconProps } from '../../../../types/IconProps';

    defineOptions({
        name: 'YIconHouseRegular',
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
        <path d="M8 20L19.2 11.6C22.0444 9.46667 25.9556 9.46667 28.8 11.6L40 20" stroke-linecap="round" stroke-linejoin="round" :stroke="color"/>
        <path d="M10 24V32C10 36.4183 13.5817 40 18 40H30C34.4183 40 38 36.4183 38 32V24" stroke-linecap="round" stroke-linejoin="round" :stroke="color"/>
    </svg>
</template>
