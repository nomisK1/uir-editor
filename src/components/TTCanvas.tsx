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
        console.log(data.json);

        const svg = d3.select('svg');
        svg.selectAll('*').remove();

        const treeLayout = d3.tree().size([height, width]);
        const root = d3.hierarchy(data.json);

        treeLayout(root);
        const nodes = root.descendants();
        const links = root.links();

        const renderLink: d3.Link<any, d3.DefaultLinkObject, [number, number]> = d3
            .linkHorizontal()
            .x((d: any) => d.y)
            .y((d: any) => d.x);

        svg.selectAll('path')
            .data(links)
            .enter()
            .append('path')
            .attr('class', 'link')
            .attr('d', (d: any) => renderLink(d));
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
