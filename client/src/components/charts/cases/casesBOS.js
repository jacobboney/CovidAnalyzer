import React, {Component} from "react";

import Plot from "react-plotly.js";


class CasesBOS extends Component {


    constructor(props) {
        super(props);
        this.state={data: []}
    }

    componentDidMount() {
        const endPoint = "/casesBOS"

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
        let z = [];
        data.map(each => {
            x.push(each.SEASON)
            y.push(each.TotalCases)
            z.push(each.Country)
        })

        plot_data['x'] = x;
        plot_data['y'] = y;
        plot_data['z'] = z;

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
                    layout = {{width: 1200, height: 700, title: `Total Cases Seasonally in ${this.transformData(this.state.data)['z'][0]}`, xaxis:{title: 'Season'}, yaxis:{title: 'Total Cases'}}}
                />
            </div>
        )
    }
}

export default CasesBOS;