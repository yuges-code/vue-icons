import type { Component } from 'vue';
import { Icons, IconType } from '@yuges/icons';
import type { IconProps as IconPropsBase } from "../../../types/IconProps";

export interface IconProps extends IconPropsBase {
    name?: Icons['name']['kebab'],
    type?: IconType,
    delay?: number,
    timeout?: number,
    suspensible: boolean,
    errorComponent?: Component,
    loadingComponent?: Component,
};
