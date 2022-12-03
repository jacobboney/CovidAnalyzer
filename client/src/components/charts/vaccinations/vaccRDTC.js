import React, {Component} from "react";

import Plot from "react-plotly.js";


class VaccRDTC extends Component {


    constructor(props) {
        super(props);
        this.state={data: []}
    }

    componentDidMount() {
        const endPoint = "/vaccRDTC"

        fetch(endPoint).then(
            response => response.json()
        ).then(
            data => {
                this.setState({data: data})
            })
    }

    transformData(data){
        let plot_data = [];

        let x = [];
        let y = [];
        data.map(each => {
            x.push(each.NAME)
            y.push(each.AREA)
        })

        plot_data['x'] = x;
        plot_data['y'] = y;

        return plot_data;
    }

    render() {
        return (
            <div>
                <Plot
                    data ={[
                        {
                            type: 'bar',
                            x: this.transformData(this.state.data)['x'],
                            y: this.transformData(this.state.data)['y']
                        }
                    ]}
                    layout = {{width: 500, height: 500, title: "Ratio of Deaths to Cases"}}
                />
            </div>
        )
    }
}

export default VaccRDTC;