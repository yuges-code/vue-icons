<script setup lang="ts">
    import type { IconProps } from '../../../../types/IconProps';

    defineOptions({
        name: 'YIconCheckDynamic',
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
        <path d="M12 25.5882L19 33L27 24.5294L36 15" stroke-linecap="round" stroke-linejoin="round" :stroke="color"/>
    </svg>
</template>
