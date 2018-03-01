import React, { PureComponent } from 'react';

class PieChart extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='pie-chart-container'>
                <canvas id='piechart' width='400' height='400'>Your browser is too old!</canvas>
                <br/>
                <table id='proportions-table'></table>
                <br/>
                <p id='piechart-instructions'>
                    Drag the circles or click the buttons to adjust the pie chart. If a segment has gone,
                    you can get it back by clicking it's '+' button.
                </p>
            </div>
        );
    }
}

export default PieChart;