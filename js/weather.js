// JavaScript Document
var option1 = {
    title : {
        text: '2014主要城市空气质量',
        x:'center',
        y:'top',
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['北京','上海','广州'],
        x:'right',
        y:'top',
    },
    toolbox: {
        show : true,
        itemSize: 30,
        showTitle: false,
        itemGap: 10,
        padding: 5,
        feature : {
            magicType : {show: true, type: ['line', 'bar'],showTitle:true,},
        },
        x:'left',
        y:'top',
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
        }
    ],
    yAxis : [
        {
        	name : 'AQI(空气质量)',
            type : 'value',
        }
    ],
    series : [
        {
            name:'北京',
            type:'line',
            data:[123, 183, 124, 130, 101, 92, 131, 98, 94, 154, 120,88],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'上海',
            type:'line',
            data:[102, 74, 82, 77, 94, 66, 69, 59, 61, 69, 75, 101],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'广州',
            type:'line',
            data:[118, 64, 74, 67, 50, 56, 60, 55, 59, 85, 70, 79],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        }
        
    ]
};

var myChart1 = echarts.init(document.getElementById('chart1')); 
myChart1.setOption(option1); 

var optionPie1 = {
	title : {
        text: '2014某城市城市12月空气质量',
        x:    'center',
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    calculable : true,
    series : [
        {
            name:'空气质量',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:3, name:'优'},
                {value:22, name:'良'},
                {value:6, name:'轻度污染'}
            ]
        }
    ],
    legend: {
        orient : 'vertical',
        x : 'left',
        y : 'bottom',
        data:['优','良','轻度污染']
    },
};

var optionPie2 = {
	title : {
        text: '2014某城市城市12月空气质量',
        x:    'center',
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        y : 'bottom',
        data:['AQI>100','AQI<100']
    },
    calculable : true,
    series : [
        {
            name:'空气质量',
            type:'pie',
            center : ['35%', 200],
            radius : [80, 120],
            itemStyle : {
                normal : {
                    label : {
                        show : true,
                        position : 'center',
                        formatter : "19.35%",
                        textStyle : {
                            color : 'red',
                            fontSize : '30',
                            fontFamily : '微软雅黑',
                            fontWeight : 'bold'
                        }
                    },
                    labelLine : {
                        show : false
                    }
                }
            },
            data:[
                {value:6, name:'AQI>100'},
                {value:25, name:'other', itemStyle:{normal:{ color: '#E5E5E5'}}},
            ]
        },
        {
            name:'空气质量',
            type:'pie',
            center : ['75%', 200],
            radius : [80, 120],
            clockWise: false,
            itemStyle : {
                normal : {
                    label : {
                        show : true,
                        position : 'center',
                        formatter : "80.65%",
                        textStyle : {
                            color : 'red',
                            fontSize : '30',
                            fontFamily : '微软雅黑',
                            fontWeight : 'bold'
                        }
                    },
                    labelLine : {
                        show : false
                    }
                },
            },
            data:[
                {value:6, name:'other', itemStyle:{normal:{color: '#E5E5E5'}}},
                {value:25, name:'AQI<100'}
            ]
        },
    ]
};

var myChart2 = echarts.init(document.getElementById('chart2')); 
myChart2.setOption(optionPie1); 

var chat2Tag1 = document.getElementById('chat2-tag1');
var chat2Tag2 = document.getElementById('chat2-tag2');
window.onload = function(){
	chat2Tag1.onclick = function(){
		myChart2 = echarts.init(document.getElementById('chart2'));
		myChart2.setOption(optionPie1); 
		//chat2Tag1.style.border = '5px #BBFFFF solid';
		//chat2Tag2.style.border-bottom = '5px #BBFFF solid';
	}
	chat2Tag2.onclick = function(){
		myChart2 = echarts.init(document.getElementById('chart2'));
		myChart2.setOption(optionPie2); 
		//chat2Tag1.style.border-bottom = '5px #FFF solid';
		//chat2Tag2.style.border-bottom = '5px #BBFFFF solid';
	}
}
