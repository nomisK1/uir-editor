import React from 'react';
import * as d3 from 'd3';
import { treeData } from '../content/TargetTree';

interface ITTCanvasProps {
    data: treeData;
    width: number;
    height: number;
    showVisual: boolean;
}

class TTCanvas extends React.Component<ITTCanvasProps> {
    draw() {}

    componentDidMount() {
        this.draw();
    }

    shouldComponentUpdate(nextProps: ITTCanvasProps) {
        return this.props.data !== nextProps.data && nextProps.showVisual ? true : false;
    }

    componentDidUpdate() {
        this.draw();
    }

    render() {
        return <svg className="ttCanvas"></svg>;
    }
}

export default TTCanvas;
