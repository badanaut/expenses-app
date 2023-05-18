import Chart from "../Chart/Chart";

function ExpensesChart(props) {

  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense in props.expense) {
    const expenseMonth = expense.date.getMonth(); // January = 0, February = 1,...
    chartDataPoints[expenseMonth].value += expense.amounth;
  }

  return <Chart dataPoints={chartDataPoints} />;
}

export default ExpensesChart;
