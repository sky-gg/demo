import * as React from 'react';
import G2 from '@antv/g2';

export default class TestChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // G2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
      data: [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 }
      ]
    };
  }
  componentDidMount() {
    // Step 1: 创建 Chart 对象
    const chart = new G2.Chart({
      container: 'c1', // 指定图表容器 ID
      width: 600, // 指定图表宽度
      forceFit: true, //图表宽度自适应
      height: 500, // 指定图表高度
      // fill: '#afd', // 图表背景色
      // fillOpacity: { number }, // 图表背景透明度
      // stroke: { string }, // 图表边框颜色
      // strokeOpacity: { number }, // 图表边框透明度
      // opacity: { number }, // 图表整体透明度
      // lineWidth: { number }, // 图表边框粗度
      // radius: { number } // 图表圆角大小
    });
    // Step 2: 载入数据源
    chart.source(this.state.data);
    // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
    chart
      .interval()
      .position('genre*sold')
      .color('#afd')
      .opacity(0.9)
      .size(30)
    ;
    // Step 4: 渲染图表
    chart.render();
  }
  render() {
    return <div id="c1" />;
  }
}
