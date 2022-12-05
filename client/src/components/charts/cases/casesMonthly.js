import React, {Component} from "react";

import Plot from "react-plotly.js";



class CasesMonthly extends Component {


    constructor(props) {
        super(props);
        this.state={data: [], data2:[]}
    }

    componentDidMount() {
        const endPoint = "/casesMonthly"

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
            x.push(each.Date)
            y.push(each.Monthly_Cases)

        })

        plot_data['x'] = x;
        plot_data['y'] = y;

        console.log(plot_data['x'])
        console.log(plot_data['y'])
        return plot_data;
    }

    render() {
        return (
            <div>
                <Plot
                    data ={[
                        {
                            type: 'scatter',
                            mode: "lines+markers",
                            x: this.transformData(this.state.data)['x'],
                            y: this.transformData(this.state.data)['y'],
                            line:{color: 'rgb(235,104,100)'}
                        }
                    ]}
                    layout = {{width: 1000, height: 600, title: "Number of Monthly Cases over Time (USA)", xaxis: {type: 'date', title: 'Date (MMM-YYYY)'}, yaxis:{title: 'Number of Cases (Monthly)'}}}
                />
            </div>
        )
    }
}

export default CasesMonthly;