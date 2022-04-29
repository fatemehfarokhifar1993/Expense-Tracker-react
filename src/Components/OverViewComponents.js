import { useState } from "react";
import TransActionForm from "./TransActionForm";

const OverViewComponents = ({ income, expense, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="topSection">
        <div className="resultSection">
          <div className="balanceBox">
            Balance <span> $ {income - expense}</span>
          </div>
          <div className="expenseBox">
            Expense <span style={{ color: "red" }}> $ {expense}</span>
          </div>
          <div className="incomeBox">
            income <span> $ {income}</span>
          </div>
        </div>

        <button
          onClick={() => setIsShow((prevState) => !prevState)}
          className={`btn ${isShow && "cancle"}`}
        >
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && (
        <TransActionForm
          addTransaction={addTransaction}
          setIsShow={setIsShow}
        />
      )}
    </>
  );
};

export default OverViewComponents;
