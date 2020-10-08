import axios from 'axios'
import React, {Component} from 'react'
import {Line} from 'react-chartjs-2'
import {connect} from 'react-redux'



class Graph extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chartData:{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
                datasets: [
                    {
                        label: 'Deals Per Month',
                        data: [],
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

    componentDidMount() {
        console.log('mount', this.props)
        this.getData()
        // axios.get('/api/month').then((res) => {
        //     console.log('graph', res.data)
        //     this.setState({
        //         chartData:{
        //             labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        //             datasets: [
        //                 {
        //                     label: 'Deals Per Month',
        //                     data: res.data,
        //                     backgroundColor:[
        //                         'rgb(255,139,30, 0.6)',
        //                         'rgba(255, 99, 132, 0.6)',
        //                         'rgba(54, 162, 235, 0.6)',
        //                         'rgba(255, 206, 86, 0.6)',
        //                         'rgba(75, 192, 192, 0.6)',
        //                         'rgba(153, 102, 255, 0.6)',
        //                         'rgba(255, 99, 132, 0.6)',
        //                         'rgba(54, 162, 235, 0.6)',
        //                         'rgba(255, 206, 86, 0.6)',
        //                         'rgba(75, 192, 192, 0.6)',
        //                         'rgba(153, 102, 255, 0.6)', 
        //                     ]
        //                 }
        //             ]
        //         }
        //     })
        // })
    }

    componentDidUpdate(prev) {
        // console.log('prev', prev)
        if(prev && prev.user.spiff !== this.props.user.spiff){
            this.getData()
        }
    } 

    getData = () => {
        axios.get('/api/month').then((res) => {
            console.log('graph', res.data)
            this.setState({
                chartData:{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
                    datasets: [
                        {
                            label: 'Deals Per Month',
                            data: res.data,
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
            })
        })
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

const mapStateToProps = (store) => store.authReducer
export default connect(mapStateToProps)(Graph)