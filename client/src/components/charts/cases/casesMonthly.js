import React, {Component} from "react";

import Plot from "react-plotly.js";



class CasesMonthly extends Component {


    constructor(props) {
        super(props);
        this.state={data: []}
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
        let z = [];
        data.map(each => {
            x.push(each.Date)
            y.push(each.Monthly_Cases)
            z.push(each.Code)
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
                            type: 'scatter',
                            mode: "lines+markers",
                            x: this.transformData(this.state.data)['x'],
                            y: this.transformData(this.state.data)['y'],
                            line:{color: 'rgb(235,104,100)'}
                        }
                    ]}
                    layout = {{width: 1000, height: 600, title: `Number of Monthly Cases over Time in ${this.transformData(this.state.data)['z'][0]}`, xaxis: {type: 'date', title: 'Date (MMM-YYYY)'}, yaxis:{title: 'Number of Cases (Monthly)'}}}
                />
            </div>
        )
    }
}

export default CasesMonthly;