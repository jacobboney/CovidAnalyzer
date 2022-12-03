import React from "react";

import Plot from "../../../node_modules/react-plotly.js/react-plotly";

class Graph extends React.Component {

    render() {

        return (

            <Plot

                data={[

                    {

                        x: [1, 2, 3],

                        y: [2, 6, 3],

                        type: "scatter",

                        mode: "lines+markers",

                        marker: { color: "red" },

                    },

                    { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },

                ]}

                layout={{ width: 320, height: 240, title: "Graph Example" }}

            />

        );

    }

}

export default Graph;

