import React, {Component} from "react";

import Plot from "react-plotly.js";


class CasesVsHDI extends Component {


    constructor(props) {
        super(props);
        this.state={data: []}
    }

    componentDidMount() {
        const endPoint = "/casesVsHDI"

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
            x.push(each.HDI)
            y.push(each.Country)
            z.push(each.PerCapita)
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
                            type: 'scatter3d',
                            mode: "markers",
                            x: this.transformData(this.state.data)['x'],
                            y: this.transformData(this.state.data)['y'],
                            z: this.transformData(this.state.data)['z'],
                            //line:{color: 'rgb(235,104,100)'}
                            marker: {color: 'rgb(235,104,100)', size: 4}
                        }
                    ]}
                    layout = {{width: 1200, height: 750, title: "Number of Cases Per Capita Against HDI", scene:{xaxis:{title: "HDI"}, yaxis:{title: "Country"}, zaxis:{title: "Cases Per Capita"}}}}

                />
            </div>
        )
    }
}

export default CasesVsHDI;