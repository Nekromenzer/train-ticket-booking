import { Bar, Column, Area, Liquid, Line, DualAxes } from '@ant-design/plots'

const dataA = [
  {
    type: 'Jan',
    sales: 38
  },
  {
    type: 'Feb',
    sales: 52
  },
  {
    type: 'Mar',
    sales: 61
  },
  {
    type: 'Apr',
    sales: 145
  },
  {
    type: 'May',
    sales: 48
  },
  {
    type: 'Jun',
    sales: 38
  },
  {
    type: 'Jul',
    sales: 38
  },
  {
    type: 'Aug',
    sales: 38
  }
]

const CommonCharts = ({
  type = 'col',
  data = dataA,
  xField = 'type',
  yField = 'sales',
  width = 0.5,
  label = {
    position: 'middle',
    style: {
      fill: '#FFFFFF',
      opacity: 0.6
    }
  },
  xAxis = {
    label: {
      autoHide: true,
      autoRotate: false
    }
  },
  meta = {
    type: {
      alias: 'alies'
    },
    sales: {
      alias: 'sales'
    }
  },
  color,
  barStyle,
  // progressLiquidConfig
  percent = 0.25,
  height = '10rem'
}) => {
  if (type === 'col') {
    const colConfig = {
      data,
      xField: xField,
      yField: yField,
      columnWidthRatio: width,
      color: color,
      label: label,
      xAxis: xAxis,
      meta: meta
    }

    return <Column {...colConfig} />
  }
  if (type === 'bar') {
    const barConfig = {
      data,
      xField: xField,
      yField: yField,
      barWidthRatio: width,
      barStyle: barStyle,
      meta: meta,
      color: color
    }
    return <Bar {...barConfig} />
  }
  if (type === 'area') {
    const areaConfig = {
      data,
      xField: xField,
      yField: yField,
      barWidthRatio: width,
      barStyle: barStyle,
      meta: meta,
      color: color
    }
    return <Area {...areaConfig} />
  }
  if (type === 'progress-liquid') {
    const config = {
      percent: percent,
      outline: {
        border: 0,
        distance: 4
      },
      wave: {
        length: 128
      }
    }
    return (
      <Liquid
        {...config}
        className={`!max-h-[${height}rem] text-white`}
        style={{ height: `${height}rem` }}
      />
    )
  }
  if (type === 'line') {
    const config = {
      data,
      xField: 'year',
      yField: 'gdp',
      seriesField: 'name',
      yAxis: {
        label: {
          formatter: v => `${(v / 10e8).toFixed(1)} B`
        }
      },
      legend: {
        position: 'top'
      },
      smooth: true,
      animation: {
        appear: {
          animation: 'path-in',
          duration: 5000
        }
      }
    }
    return <Line {...config} />
  }
  if (type === 'duelLine') {
    const config = {
      data: [data, data],
      xField: xField,
      yField: yField,
      geometryOptions: [
        {
          geometry: 'line',
          smooth: false,
          color: '#5B8FF9',
          label: {
            formatter: datum => {
              return `${datum.value}`
            }
          },
          lineStyle: {
            lineWidth: 3,
            lineDash: [5, 5]
          }
        },
        {
          geometry: 'line',
          smooth: true,
          color: '#5AD8A6',
          lineStyle: {
            lineWidth: 4,
            opacity: 0.5
          },
          label: {
            formatter: datum => {
              return `${datum.count}`
            }
          },
          point: {
            shape: 'circle',
            size: 4,
            style: {
              opacity: 0.5,
              stroke: '#5AD8A6',
              fill: '#fff'
            }
          }
        }
      ]
    }
    return <DualAxes {...config} />
  }
  return null
}

export default CommonCharts
