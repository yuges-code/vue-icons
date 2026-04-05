<script setup lang="ts">
    import type { IconProps } from '../../../../types/IconProps';

    defineOptions({
        name: 'YIconHomeDoorRegular',
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
        <path d="M28 40H32C36.4183 40 40 36.4183 40 32V23.2082C40 20.5739 38.7031 18.1084 36.5322 16.6159L28.5322 11.1159C25.8022 9.23902 22.1978 9.23902 19.4678 11.1159L11.4678 16.6159C9.29693 18.1084 8 20.5739 8 23.2082V32C8 36.4183 11.5817 40 16 40H20" stroke-linecap="round" stroke-linejoin="round" :stroke="color"/>
        <path d="M20 40L19.1767 35.8835C18.568 32.8398 20.896 30 24 30C27.104 30 29.432 32.8398 28.8233 35.8835L28 40" stroke-linecap="round" stroke-linejoin="round" :stroke="color"/>
        <slot></slot>
    </svg>
</template>
