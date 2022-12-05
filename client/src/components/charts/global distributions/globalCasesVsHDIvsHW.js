import React, {Component} from "react";

import Plot from "react-plotly.js";


class GlobalCasesVsHDIvsHW extends Component {


    constructor(props) {
        super(props);
        this.state={data: []}
    }

    componentDidMount() {
        const endPoint = "/globalCasesVsHDIvsHW"

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
            y.push(each.HWF)
            z.push(each.TotalCases)
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
                    layout = {{width: 1200, height: 750, title: "Number of Cases Per Capita Against HDI", scene:{xaxis:{title: "HDI"}, yaxis:{title: "Percent Access to Handwashing", tickformat: ',.0%'}, zaxis:{title: "Total Cases"}}}}

                />
            </div>
        )
    }
}

export default GlobalCasesVsHDIvsHW;