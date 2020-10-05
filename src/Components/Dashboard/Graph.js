import React, {Component} from 'react'
import {Line} from 'react-chartjs-2'
import {Bar} from 'react-chartjs-2'


class Graph extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chartData:{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
                datasets: [
                    {
                        label: 'Deals Per Month',
                        data: [
                            12,
                            13,
                            6,
                            1,
                            3,
                            6,
                            8,
                            16,
                            14,
                            4
                        ],
                        backgroundColor:[
                            'rgb(255,139,30, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)', 
                        ]
                    }
                ]
            }
        }
    }

    render() {

        return(
            <div className='chart'>
                <Line
                    data={this.state.chartData}
                    width={350}
                    height={140}
                    options={{ }}
                />
            </div>
        )
    }
}

export default Graph