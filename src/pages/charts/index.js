import * as echarts from 'echarts';
import { useEffect } from 'react';
import MyEcharts from '../../components/Echarts';
const option1 = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Step Start',
            type: 'line',
            step: 'start',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'Step Middle',
            type: 'line',
            step: 'middle',
            data: [220, 282, 201, 234, 290, 430, 410]
        },
        {
            name: 'Step End',
            type: 'line',
            step: 'end',
            data: [450, 432, 401, 454, 590, 530, 510]
        }
    ]
};

// myChart.setOption(option1);
// var myChart = echarts.init(document.getElementById('chart2'));
const option2 = {
    series: [
        {
            type: 'pie',
            data: [
                {
                    value: 100,
                    name: 'A'
                },
                {
                    value: 200,
                    name: 'B'
                },
                {
                    value: 300,
                    name: 'C'
                },
                {
                    value: 400,
                    name: 'D'
                },
                {
                    value: 500,
                    name: 'E'
                }
            ],
            roseType: 'area'
        }
    ]
};

// myChart.setOption(option2);
// var myChart = echarts.init(document.getElementById('chart3'));
const option3 = {
    xAxis: {
        data: ['A', 'B', 'C', 'D', 'E']
    },
    yAxis: {},
    series: [
        {
            data: [10, 22, 28, 43, 49],
            type: 'bar',
            stack: 'x'
        },
        {
            data: [5, 4, 3, 5, 10],
            type: 'bar',
            stack: 'x'
        }
    ]
};
const style = {height: '400px'}

const ChartDemo = () => {
    return (
        <>
            <MyEcharts style={style} chartData={option1}/>
            <MyEcharts style={style} chartData={option3}/>
            <MyEcharts style={style} chartData={option2} isAxisChart = {false}/>
        </>
    )
}

export default ChartDemo