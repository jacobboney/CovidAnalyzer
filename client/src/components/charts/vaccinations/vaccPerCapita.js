import React, {Component} from "react";

import Plot from "react-plotly.js";


class VaccPerCapita extends Component {


    constructor(props) {
        super(props);
        this.state={data: []}
    }

    componentDidMount() {
        const endPoint = "/vaccPerCapita"

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
            x.push(each.COUNTRY)
            y.push(each.PERCAPITA)
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
                            y: this.transformData(this.state.data)['y'],
                            marker:{color: 'rgb(235,104,100)'}
                        }
                    ]}
                    layout = {{width: 1200, height: 500, title: "Vaccinations Per Capita Globally", xaxis:{title: 'Country Codes'}, yaxis:{title: 'Vaccinations Per Capita'}}}
                />
            </div>
        )
    }
}

export default VaccPerCapita;