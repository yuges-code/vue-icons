<script setup lang="ts">
    import type { IconProps } from '../../../../types/IconProps';

    defineOptions({
        name: 'YIconHomeDynamic',
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
        <path d="M32 40H16C11.5817 40 8 36.4183 8 32V23.2082C8 20.5739 9.29693 18.1084 11.4678 16.6159L19.4678 11.1159C22.1978 9.23902 25.8022 9.23902 28.5322 11.1159L36.5322 16.6159C38.7031 18.1084 40 20.5739 40 23.2082V32C40 36.4183 36.4183 40 32 40Z" stroke-linecap="round" stroke-linejoin="round" :stroke="color"/>
        <path d="M18 32H30" stroke-linecap="round" stroke-linejoin="round" :stroke="color"/>
    </svg>
</template>
