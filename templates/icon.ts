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
    const children = svg?.children?.map((child: any) => {
        if (child.attributes?.['stroke-width']) {
            delete child.attributes['stroke-width'];
        }

        if (child.attributes?.['stroke']) {
            delete child.attributes['stroke'];
        }

        child.attributes[':stroke'] = 'color'

        return `<${child.name} ${ attributes(child.attributes) }/>`
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
        ${ children.join('\n' + ' '.repeat(8)) }
        <slot></slot>
    </svg>`;
}

function attributes(attributes: any)
{
    return Object.entries(attributes as {string: string})
        ?.map((item: string[]) => {item[1] = `"${item[1]}"`; return item.join('=')})
        ?.join(' ');
}
