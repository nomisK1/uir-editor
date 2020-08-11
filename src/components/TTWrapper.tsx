import * as React from 'react';
import TTCanvas from './TTCanvas';
import { treeData } from '../content/TargetTree';

interface ITTWrapperProps {
    data: treeData | null;
    showTT: boolean;
}

class TTWrapper extends React.Component<ITTWrapperProps> {
    private wrapper: HTMLDivElement | null = null;
    private width: number = 0;
    private height: number = 0;

    constructor(props: ITTWrapperProps) {
        super(props);
        this.resize = this.resize.bind(this);
    }

    updateDimensions() {
        if (this.wrapper) {
            let domrect = this.wrapper.getBoundingClientRect();
            this.width = Math.floor(domrect.width);
            this.height = Math.floor(domrect.height);
            //console.log('TTMODAL: ' + this.width + ' // ' + this.height);
        }
    }

    resize() {
        this.updateDimensions();
        if (this.props.showTT) this.forceUpdate();
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    shouldComponentUpdate(nextProps: ITTWrapperProps) {
        return this.props.data !== nextProps.data && nextProps.showTT ? true : false;
    }

    componentDidUpdate() {
        if (!this.width && !this.height) this.forceUpdate();
        this.updateDimensions();
    }

    renderTT() {
        if (this.props.data && this.width && this.height)
            return <TTCanvas data={this.props.data} width={this.width} height={this.height} />;
    }

    render() {
        return (
            <div className="ttWrapper" ref={(ref) => (this.wrapper = ref)}>
                {this.renderTT()}
            </div>
        );
    }
}

export default TTWrapper;
