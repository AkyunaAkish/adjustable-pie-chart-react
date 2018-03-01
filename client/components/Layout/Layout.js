import React, { PureComponent } from 'react';
import PieChart from '../PieChart/PieChart';

class Layout extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='layout-container'>
                <h1>Layout</h1>
                <hr/>
                <PieChart/>
            </div>
        );
    }
}

export default Layout;