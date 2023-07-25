import { Bar, Column, Area, Liquid } from '@ant-design/plots'

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
    return <Liquid {...config} className={`!max-h-[${height}rem] text-white`} style={{height:`${height}rem`}}/>
  }
  return null
}

export default CommonCharts
