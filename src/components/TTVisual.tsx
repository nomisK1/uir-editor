import React from 'react';
import * as d3 from 'd3';
import { treeData, ttNode, ttEdge } from '../content/TargetTree';

interface ITTVisualProps {
    data: treeData;
    /* interface treeData {
    context: string;
    nodes: {
        label: string;
        opcode: string;
        operands: string[];
    }[];
    edges: {
        from: string;
        to: string;
    }[];
    } */
    showVisual: boolean;
}

class TTVisual extends React.Component<ITTVisualProps> {
    private canvas: SVGSVGElement | null = null;
    private width: number = 0;
    private height: number = 0;

    private updateDimensions() {
        if (this.canvas) {
            let domrect = this.canvas.getBoundingClientRect();
            this.width = domrect.width;
            this.height = domrect.height;
            console.log(domrect);
        }
    }

    private draw() {
        this.updateDimensions();
        const d3canvas: any = d3.select(this.canvas);
        d3canvas
            .append('circle')
            .attr('r', 5)
            .attr('cx', this.width / 2)
            .attr('cy', this.height / 2)
            .attr('fill', 'red');
    }

    componentDidMount() {
        this.draw();
    }

    shouldComponentUpdate(nextProps: ITTVisualProps) {
        return this.props.data !== nextProps.data && nextProps.showVisual ? true : false;
    }

    componentDidUpdate() {
        this.draw();
    }

    render() {
        return <svg id="ttVisual" ref={(ref) => (this.canvas = ref)} />;
    }
}

export default TTVisual;
