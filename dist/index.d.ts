/// <reference types="react" />
import * as React from "react";
import "./style.less";
export interface SvgIconFileProps {
    icon: any;
    size?: string;
    iconClassName?: string;
    textClassName?: string;
    tag?: JSX.Element | boolean;
    disabled?: boolean;
    direction?: "column" | "row";
}
declare class SvgIconFile extends React.Component<SvgIconFileProps & React.HTMLAttributes<any>, {}> {
    static defaultProps: {
        size: string;
        direction: string;
        disabled: boolean;
    };
    render(): JSX.Element;
}
export default SvgIconFile;
