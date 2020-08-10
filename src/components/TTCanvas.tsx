import React from 'react';
import * as d3 from 'd3';
import { treeData } from '../content/TargetTree';

interface ITTCanvasProps {
    data: treeData;
    width: number;
    height: number;
}

class TTCanvas extends React.Component<ITTCanvasProps> {
    private canvas: SVGElement | null = null;

    draw() {
        console.log(this.props.data);

        d3.select('svg')
            .append('circle')
            .attr('r', 5)
            .attr('cx', this.props.width / 2)
            .attr('cy', this.props.height / 2)
            .attr('fill', 'red');
    }

    componentDidMount() {
        this.draw();
    }

    componentDidUpdate() {
        this.draw();
    }

    render() {
        return (
            <svg
                id="ttCanvas"
                className="svg"
                height={this.props.height}
                width={this.props.width}
                ref={(ref) => (this.canvas = ref)}
            />
        );
    }
}

export default TTCanvas;
