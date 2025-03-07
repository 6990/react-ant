import * as echarts from 'echarts';
import { useEffect, useRef} from 'react';

const ECharts = ({ style, chartData, isAxisChart = true }) => {
    const echartRef = useRef();
    const prevChartData = useRef();

    useEffect(() => {
        const echartInstance = echarts.init(echartRef.current);
        if (!prevChartData.current || JSON.stringify(prevChartData.current)!== JSON.stringify(chartData)) {
            let options;
            if (isAxisChart) {
                options = {
                    xAxis: chartData.xAxis,
                    yAxis: chartData.yAxis,
                    series: chartData.series
                };
            } else {
                options = {
                    series: chartData.series
                };
            }
            echartInstance.setOption(options);
            prevChartData.current = chartData;
        }
    }, [chartData]);

    return <div ref={echartRef} style={style} />;
};

export default ECharts;