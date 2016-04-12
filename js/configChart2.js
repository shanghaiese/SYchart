
//init the chart
var myPOCChart = echarts.init(document.getElementById('POCmain'));


//mock data @todo chart
var timeData = [
    '2009/6/12 2:00', '2009/6/12 3:00', '2009/6/12 4:00', '2009/6/12 5:00', '2009/6/12 6:00', '2009/6/12 7:00', '2009/6/12 8:00', '2009/6/12 9:00', '2009/6/12 10:00', '2009/6/12 11:00', '2009/6/12 12:00', '2009/6/12 13:00', '2009/6/12 14:00', '2009/6/12 15:00', '2009/6/12 16:00', '2009/6/12 17:00', '2009/6/12 18:00', '2009/6/12 19:00', '2009/6/12 20:00', '2009/6/12 21:00', '2009/6/12 22:00', '2009/6/12 23:00',
    '2009/6/13 0:00', '2009/6/13 1:00', '2009/6/13 2:00', '2009/6/13 3:00', '2009/6/13 4:00', '2009/6/13 5:00', '2009/6/13 6:00', '2009/6/13 7:00'];
    


timeData = timeData.map(function (str) {
    return str.replace('2009/', '');
});


//config the data
option = {
    title: {
        text: 'Syngenta germany temperature chart' + '<br/>' + 'Berlin-Buch',
        subtext: 'Time: min sec date von xx.xx.2014 bis xx.xx.2014(xxx Tage)' + '<br/>' + 'average xxxmm Anfangsstand: xxx mm',
        x: 'center'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            return params[0].name + '<br/>'
                + params[0].seriesName + ' : ' + params[0].value + ' (m^3/s)<br/>';
        },
        axisPointer: {
            animation: false
        }
    },
    legend: {
        data: ['TmpMin', 'TmpMax', 'Prep'],
        bottom: 10,
        padding: [5, 10, 5, 10]

    },
    dataZoom: [
        {
            show: false,
            realtime: true,
            start: 30,
            end: 70,
            xAxisIndex: [0, 1]
        },
        {
            type: 'inside',
            realtime: true,
            start: 30,
            end: 70,
            xAxisIndex: [0, 1]
        }
    ],
    grid: [{
        show: false,
        left: 100,
        right: 100,
        height: '35%'
    }, {
        left: 100,
        right: 100,
        top: '55%',
        height: '35%'
    }],
    xAxis: [
        {
            splitLine: {
                show: false
            },
            type: 'time',
            boundaryGap: false,
            axisLine: { onZero: true },
            data: timeData
        },
        {
            splitLine: {
                show: false
            },
            gridIndex: 1,
            type: 'time',
            boundaryGap: false,
            axisLine: { onZero: true },
            data: timeData,
            position: 'top'
        }
    ],
    yAxis: [
        {
            splitLine: {
                show: false
            },
            name: '湿度precipration(mm)',
            type: 'value',
            max: 30,

        },
        {
            splitLine: {
                show: false
            },
            gridIndex: 1,
            name: '降雨量 rain(mm)',
            type: 'value',
            inverse: true
        }
    ],
    series: [
                {
                    name: 'TmpMax',
                    type: 'line',
                    symbol: 'circle',  //maybe change with url image
                    data: [6,
                        7.6,
                        8.5,
                        9.3,
                        6.5,
                        8.1,
                        8.7,
                        4.9,
                        8.1,
                        6.7,
                        5,
                        3.3,
                        3.2,
                        2.8,
                        1.6,
                        2.1,
                        1.4,
                        5.9,
                        5.5,
                        6,
                        5.9,
                        5,
                        2.1,
                        3.9,
                        2.9,
                        4.7,
                        4,
                        4.1,
                        2.1,
                        2,
                        1,
                        5.6],
                    emphasis: {
                        labelLine: {
                            show: true,
                            lineStyle: { color: '#EC0104', type: 'solid' }
                        }
                    }
                },
                {
                    name: 'TmpMin',
                    type: 'line',
                    symbol: 'triangle',
                    data: [2.8,
                        3.9,
                        5.6,
                        5,
                        3.7,
                        5.9,
                        6,
                        4,
                        3.3,
                        6.2,
                        4.5,
                        1.7,
                        1.3,
                        0.1,
                        -0.8,
                        -0.9,
                        1.2,
                        -1.5,
                        4.6,
                        3.9,
                        5.2,
                        4.1,
                        1.5,
                        0.9,
                        -0.4,
                        1.1,
                        3.5,
                        3,
                        1.7,
                        0.1,
                        0.6,
                        0.9],
                    emphasis: {
                        labelLine: {
                            show: true,
                            lineStyle: { color: '#DBAF31', type: 'solid' }
                        }
                    }
                },
                {
                    name: 'Prep',
                    type: 'bar',
                    symbol: 'rectangle',
                    data: [0.3,
                        7.3,
                        6.6,
                        1.3,
                        6,
                        9.5,
                        16.9,
                        0.8,
                        7.7,
                        0,
                        1.5,
                        1.4,
                        5,
                        0,
                        0,
                        0.1,
                        0.1,
                        6.3,
                        2,
                        5.9,
                        0.4,
                        8,
                        7.8,
                        0.3,
                        1,
                        2.8,
                        3.1,
                        0.4,
                        0.3,
                        0.8,
                        0.1,
                        0.7],
                    emphasis: {
                        labelLine: {
                            show: true,
                            lineStyle: { color: '#B7BBFD', type: 'solid' }
                        }
                    }
                }
    ]
};

//set the script file to main
myPOCChart.setOption(option);

$(window).resize(function () {
    myPOCChart.resize();
});
