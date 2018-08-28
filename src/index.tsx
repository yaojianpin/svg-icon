import * as React from 'react'
import './style.less';

export interface SvgIconFileProps {
    icon: JSX.Element;
    size?: string;
    iconClassName?: string;
    textClassName?: string;
    tag?: JSX.Element | boolean ;
    disabled?: boolean;
    direction?: 'column' | 'row'
}

class SvgIconFile extends React.Component<SvgIconFileProps & React.HTMLAttributes<any>, {}> {
    static defaultProps = { size: 'md', direction: 'row', disabled: false }
    render() {
        const {
            icon,
            size,
            tag,
            direction,
            disabled,
            iconClassName,
            textClassName,
            children,
            ...restProps
        } = this.props;

        // className for text part
        const textClass = textClassName ? textClassName : `svg-icon-text-${size}`;
        const iconClass = iconClassName ? iconClassName : `svg-icon svg-icon-${size}`;

        return (
            <div className="svg-icon-root">
                <div className={ `${disabled ? 'disabled' : ''}`} style={{ display: 'flex', flexDirection: direction, alignItems: 'center', position: 'relative' }} >
                    <div {...restProps} className={ iconClass } >
                        { icon }
                        { tag && <div className="tag"> { tag } </div> }
                    </div>
                    {children && <div className={`${textClass} ${direction}`} >{children}</div>}
                </div>
            </div>);
    }
}
export default SvgIconFile;