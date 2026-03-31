export const template = (name: string, type: string, svg: any) =>
`<script setup lang="ts">
    import type { IconProps } from '../../../../types/IconProps';

    defineOptions({
        name: 'YIcon${name}${type[0].toUpperCase() + type.slice(1)}',
    });

    withDefaults(defineProps<IconProps>(), {
        ${
            Object.entries(svg.attributes as {string: string})
                ?.map((item: string[]) => {item[1] = Number(item[1]) ? item[1] : `'${item[1]}'`; return item.join(': ')})
                ?.join(',\n' + ' '.repeat(8))
        },
        strokeWidth: 3,
        color: 'currentColor',
    });
</script>

<template>
    ${stringify(svg)}
</template>
`;

function stringify(svg: any)
{
    const paths = svg?.children?.map((path: any) => {
        if (path.attributes?.['stroke-width']) {
            delete path.attributes['stroke-width'];
        }

        if (path.attributes?.['stroke']) {
            delete path.attributes['stroke'];
        }

        path.attributes[':stroke'] = 'color'

        return `<path ${ attributes(path.attributes) }/>`
    });

    return `<svg
        :fill="fill"
        :color="color"
        :xmlns="xmlns"
        :width="width"
        :height="height"
        :viewBox="viewBox"
        :stroke-width="strokeWidth"
    >
        ${ paths.join('\n' + ' '.repeat(8)) }
    </svg>`;
}

function attributes(attributes: any)
{
    return Object.entries(attributes as {string: string})
        ?.map((item: string[]) => {item[1] = `"${item[1]}"`; return item.join('=')})
        ?.join(' ');
}
