<script setup lang="ts">
    import type { IconProps } from '../../../../types/IconProps';

    defineOptions({
        name: 'YIconSealCheckDynamic',
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
        <path d="M20.5284 9.76625C22.2437 7.41124 25.7563 7.41124 27.4716 9.76625V9.76625C28.4203 11.0687 30.0182 11.7306 31.61 11.4804V11.4804C34.4881 11.0281 36.9719 13.5119 36.5196 16.39V16.39C36.2694 17.9818 36.9313 19.5797 38.2338 20.5284V20.5284C40.5888 22.2437 40.5888 25.7563 38.2338 27.4716V27.4716C36.9313 28.4203 36.2694 30.0182 36.5196 31.61V31.61C36.9719 34.4881 34.4881 36.9719 31.61 36.5196V36.5196C30.0182 36.2694 28.4203 36.9313 27.4716 38.2338V38.2338C25.7563 40.5888 22.2437 40.5888 20.5284 38.2338V38.2338C19.5797 36.9313 17.9818 36.2694 16.39 36.5196V36.5196C13.5119 36.9719 11.0281 34.4881 11.4804 31.61V31.61C11.7306 30.0182 11.0687 28.4203 9.76625 27.4716V27.4716C7.41124 25.7563 7.41124 22.2437 9.76625 20.5284V20.5284C11.0687 19.5797 11.7306 17.9818 11.4804 16.39V16.39C11.0281 13.5119 13.5119 11.0281 16.39 11.4804V11.4804C17.9818 11.7306 19.5797 11.0687 20.5284 9.76625V9.76625Z" :stroke="color"/>
        <path d="M18 24.7059L21.5 28L25.5 24.2353L30 20" stroke-linecap="round" stroke-linejoin="round" :stroke="color"/>
    </svg>
</template>
