import React, {Component} from "react";

import Plot from "react-plotly.js";


class VaccVsCases extends Component {


    constructor(props) {
        super(props);
        this.state={data: []}
    }

    componentDidMount() {
        const endPoint = "/vaccVsCases"

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
        let q = [];
        data.map(each => {
            x.push(each.Date)
            y.push(each.Cases)
            z.push(each.Vacc)
            q.push(each.Code)
        })

        plot_data['x'] = x;
        plot_data['y'] = y;
        plot_data['z'] = z;
        plot_data['q'] = q;


        return plot_data;
    }

    render() {
        return (
            <div>
                <Plot
                    data ={[
                        {
                            name: "Number of Cases",
                            type: 'scatter',
                            mode: "lines+markers",
                            x: this.transformData(this.state.data)['x'],
                            y: this.transformData(this.state.data)['y'],
                            line:{color: 'rgb(235,104,100)'}
                        },
                        {
                            name: "Number of Vaccinations",
                            type: 'scatter',
                            mode: "lines+markers",
                            x: this.transformData(this.state.data)['x'],
                            y: this.transformData(this.state.data)['z'],
                            line:{color: 'rgb(0,104,100)'}
                        }
                    ]}
                    layout = {{width: 1000, height: 600, title: `Number of Vaccinations VS Cases over Time in ${this.transformData(this.state.data)['q'][0]}`, xaxis: {type: 'date', title: 'Date (MMM-YYYY)'}, yaxis:{title: 'Count (Monthly)'}}}
                />
            </div>
        )
    }
}

export default VaccVsCases;