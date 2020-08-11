import React from 'react';
import * as d3 from 'd3';
import { treeData, treeJSON } from '../content/TargetTree';

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

        // define tree
        const treeLayout = d3
            .cluster()
            .size([innerHeight, innerWidth])
            .separation((a, b) => (a.parent === b.parent ? 1 : 1));
        const root = d3.hierarchy(data.json);
        treeLayout(root);

        // define links and nodes
        const nodes = root.descendants().filter((n) => !n.data.id.includes('[!]'));
        const hLinks: d3.HierarchyLink<treeJSON>[] = [];
        const vLinks: d3.HierarchyLink<treeJSON>[] = [];
        root.links().forEach((l) => {
            if (l.target.data.id.includes('[!]'))
                vLinks.push({
                    source: l.source,
                    target: nodes.find((n) => n.data.id === l.target.data.id.slice(0, l.target.data.id.length - 3))!,
                });
            else hLinks.push(l);
        });

        // create links
        const renderLinkHorzontal: d3.Link<any, d3.DefaultLinkObject, [number, number]> = d3
            .linkHorizontal()
            .x((d: any) => d.y)
            .y((d: any) => d.x);

        const renderLinkVertical: d3.Link<any, d3.DefaultLinkObject, [number, number]> = d3
            .linkVertical()
            .x((d: any) => d.y)
            .y((d: any) => d.x);

        g.selectAll('.hLink')
            .data(hLinks)
            .enter()
            .append('path')
            .attr('class', 'link')
            .attr('id', 'hLink')
            .attr('d', (d: any) => renderLinkHorzontal(d))
            .attr('marker-end', 'url(#hArrow)');

        g.selectAll('.vLink')
            .data(vLinks)
            .enter()
            .append('path')
            .attr('class', 'link')
            .attr('id', 'vLink')
            .attr('d', (d: any) => renderLinkVertical(d))
            .attr('marker-end', 'url(#vArrow)');

        // create arrows
        g.append('marker')
            .attr('class', 'marker')
            .attr('id', 'hArrow')
            .attr('refX', 12)
            .attr('refY', 6)
            .attr('markerWidth', 30)
            .attr('markerHeight', 30)
            .attr('markerUnits', 'userSpaceOnUse')
            .attr('orient', 'auto')
            .append('path')
            .attr('d', 'M 0 0 12 6 0 12 3 6');

        g.append('marker')
            .attr('class', 'marker')
            .attr('id', 'vArrow')
            .attr('refX', 12)
            .attr('refY', 6)
            .attr('markerWidth', 30)
            .attr('markerHeight', 30)
            .attr('markerUnits', 'userSpaceOnUse')
            .attr('orient', 'auto')
            .append('path')
            .attr('d', 'M 0 0 12 6 0 12 3 6');

        // create nodes
        g.selectAll('.node')
            .data(nodes)
            .enter()
            .append('g')
            .attr('class', 'node')
            .attr('id', (d: any) => (d.data.id === data.json.id ? 'startNode' : d.children ? 'midNode' : 'endNode'))
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
