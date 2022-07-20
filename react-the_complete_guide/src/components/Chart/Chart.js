import ChartBar from "./ChartBar";
import "../Chart/Chart.scss";

const Chart = function (props) {
	const dataPointValues = props.dataPoints.map(
		(dataPoint) => dataPoint.value
	);
	const totalMax = Math.max(...dataPointValues);

	return (
		<div className="chart">
			{props.dataPoints.map((el) => (
				<ChartBar
					key={el.label}
					value={el.value}
					maxValue={totalMax}
					label={el.label}
				>
					{props.label}
				</ChartBar>
			))}
		</div>
	);
};

export default Chart;
