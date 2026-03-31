import type { SVGAttributes } from "vue";

export interface IconProps {
    fill?: SVGAttributes['fill'],
    xmlns?: SVGAttributes['xmlns'],
    color?: SVGAttributes['color'],
    width?: SVGAttributes['width'],
    height?: SVGAttributes['height'],
    viewBox?: SVGAttributes['viewBox'],
    strokeWidth?: number
};
