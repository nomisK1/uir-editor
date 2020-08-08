import React from 'react';
import * as d3 from 'd3';
import { treeData } from '../content/TargetTree';

interface ITTVisualProps {
    data: treeData;
}

const data = [20, 50, 120, 70, 90];

class TTVisual extends React.Component<ITTVisualProps> {
    private canvas: HTMLDivElement | null = null;

    componentDidMount() {
        let svg = d3.select(this.canvas).append('svg').attr('class', 'svg');
        svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', (d, i) => i * 70)
            .attr('y', 0)
            .attr('width', 25)
            .attr('height', (d, i) => d)
            .attr('fill', 'green');
    }

    render() {
        return <div id="ttVisual" ref={(ref) => (this.canvas = ref)} />;
    }
}

export default TTVisual;
