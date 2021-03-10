import React from "react";
import {
ComposedChart,
XAxis,
YAxis,
Tooltip,
Legend,
CartesianGrid,
Area,
Bar,
} from "recharts"

const Chart: React.FC = () => {
  //表示させたいデータ群
  const dataGraph = [
      {month: '1月', '売上': 800, '総売上': 1400},
      {month: '2月', '売上': 967, '総売上': 1506},
      {month: '3月', '売上': 1098, '総売上': 989},
      {month: '4月', '売上': 1200, '総売上': 1228},
      {month: '5月', '売上': 1108, '総売上': 1100},
      {month: '6月', '売上': 680, '総売上': 1700}
  ];
  const data = [
    {date: '2020/2/1', '積雪量': 300},
    {date: '2020/2/2', '積雪量': 310},
    {date: '2020/2/3', '積雪量': 335},
    {date: '2020/2/4', '積雪量': 350},
  ]

return (
<ComposedChart //グラフ全体のサイズや位置、データを指定。場合によってmarginで上下左右の位置を指定する必要あり。
    width={600}  //グラフ全体の幅を指定
    height={280}  //グラフ全体の高さを指定
    data={data} //ここにArray型のデータを指定
    margin={{ top: 20, right: 60, bottom: 0, left: 0 }}  //marginを指定
>
  <XAxis
    dataKey="month"  //Array型のデータの、X軸に表示したい値のキーを指定
  />
  <YAxis />
  <Tooltip /> //hoverした時に各パラメーターの詳細を見れるように設定
  <Legend />  // 凡例を表示(図の【売上】【総売上】)
  <CartesianGrid //グラフのグリッドを指定
    stroke="#f5f5f5" //グリッド線の色を指定
  />
  <Area //面積を表すグラフ
    type="monotone"  //グラフが曲線を描くように指定。default値は折れ線グラフ
    dataKey="積雪量" //Array型のデータの、Y軸に表示したい値のキーを指定
    stroke="#00aced" ////グラフの線の色を指定
    fillOpacity={1}  ////グラフの中身の薄さを指定
    fill="rgba(0, 172, 237, 0.2)"  //グラフの色を指定
  />
  <Bar //棒グラフ
    dataKey="積雪量"　//Array型のデータの、Y軸に表示したい値のキーを指定
    barSize={20}  //棒の太さを指定
    stroke="rgba(34, 80, 162, 0.2)" ////レーダーの線の色を指定 
    fillOpacity={1}  //レーダーの中身の色の薄さを指定
    fill="#2250A2" ////レーダーの中身の色を指定
  />
</ComposedChart>
)
};
export default Chart;
