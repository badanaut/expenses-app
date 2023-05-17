import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";

export default function Expenses(props) {
  const { items } = props;
  // eslint-disable-next-line
  const [expenseYear, setExpenseYear] = useState(2022);

  const filterExpenses = (year) => {
    console.log("year in expenses.js");
    setExpenseYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onSelectYear={filterExpenses} />
      <ExpenseItem
        title={items[0].title}
        date={items[0].date}
        amount={items[0].amount}
      />
      <ExpenseItem
        title={items[1].title}
        date={items[1].date}
        amount={items[1].amount}
      />
      <ExpenseItem
        title={items[2].title}
        date={items[2].date}
        amount={items[2].amount}
      />
      <ExpenseItem
        title={items[3].title}
        date={items[3].date}
        amount={items[3].amount}
      />
    </Card>
  );
}
