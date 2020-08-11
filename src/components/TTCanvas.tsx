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
        const { data, width, height } = this.props;
        const margin = { top: 25, right: 200, bottom: 25, left: 100 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        // define d3-canvas
        const svg = d3.select(this.canvas);
        svg.selectAll('*').remove();
        const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

        // define tree, nodes and links
        const treeLayout = d3
            .tree()
            .size([innerHeight, innerWidth])
            .separation((a, b) => (a.parent === b.parent ? 1 : 1));
        const root = d3.hierarchy(data.json);
        treeLayout(root);
        const links = root.links();
        const nodes = root.descendants();

        // create links
        const renderLink: d3.Link<any, d3.DefaultLinkObject, [number, number]> = d3
            .linkHorizontal()
            .x((d: any) => d.y)
            .y((d: any) => d.x);

        g.selectAll('.link')
            .data(links)
            .enter()
            .append('path')
            .attr('class', 'link')
            .attr('d', (d: any) => renderLink(d));

        // create nodes
        g.selectAll('.node')
            .data(nodes)
            .enter()
            .append('g')
            .attr('class', 'node')
            .attr('transform', (d: any) => `translate(${d.y}, ${d.x})`)
            .append('circle')
            .attr('r', 5);

        // create node text
        g.selectAll('.node')
            .append('text')
            .attr('id', 'nodeText')
            .attr('dy', '-0.8em')
            .attr('text-anchor', (d: any) => (d.children ? 'middle' : 'start'))
            .text((d: any) => d.data.id);
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
                className="ttCanvas"
                height={this.props.height}
                width={this.props.width}
                ref={(ref) => (this.canvas = ref)}
            />
        );
    }
}

export default TTCanvas;
