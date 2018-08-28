import * as React from 'react'
import './index.less';

interface SvgIconProps {
    name: string;
    size?: string;
    tag?: JSX.Element | boolean ;
    group?: string;
    disabled?: boolean;
    direction?: 'column' | 'row'
}
class SvgIcon extends React.Component<SvgIconProps & React.HTMLAttributes<any>, {}> {
    static defaultProps = { size: 'md', direction: 'row', disabled: false }
    static dir = './svg';
    render() {
        const {
            name,
            size,
            tag,
            direction,
            disabled,
            group,
            children,
            onClick,
            ...restProps
        } = this.props;

        this.renderSvg(name, group, SvgIcon.dir);

        return (
            <div className="svg-icon-root">
                <div className={ `${disabled ? 'disabled' : ''}`} style={{ display: 'flex', flexDirection: direction, alignItems: 'center', position: 'relative' }} >
                    <div onClick={onClick} >
                        <svg  {...restProps} className={` svg-icon svg-icon-${name} svg-icon-${size}`  }  >
                            <use xlinkHref={`#${name}`} />
                        </svg>
                        { tag && <div className="tag"> { tag } </div> }
                    </div>
                    {children && <div className={`svg-icon-text-${size} ${direction}`} >{children}</div>}
                </div>
            </div>);
    }

    renderSvg(name: string, group?: string, dir?: string, ) {
        let svg;
        let path = dir || './svg';
        try {
            if(group) {
                svg = require(`${path}/${group}/${name}.svg`);
            }
            else {
                svg = require(`${path}/${name}.svg`);
            }
        } 
        catch (e) { 
            console.log(e);
        }
        finally {
            return svg;
        }
    }
}
export default SvgIcon;