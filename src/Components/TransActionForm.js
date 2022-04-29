import { useState } from "react";

const TransActionForm = ({ addTransaction, setIsShow }) => {
  const [formValues, setformValues] = useState({
    type: "expense",
    amount: 0,
    desc: "",
  });
  const changeHandler = (e) => {
    setformValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      formValues.desc === "" &&
      (formValues.amount === "" || !formValues.amount)
    ) {
      alert("Write transaction describtion and Amount");
    } else if (formValues.desc === "") {
      alert("Write transaction describtion");
    } else if (formValues.amount === "" || !formValues.amount) {
      alert("Write transaction Amount");
    } else {
      addTransaction(formValues);
    }
    if (submitHandler) {
      setIsShow(false);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inputs">
        <input
          type="text"
          name="desc"
          onChange={changeHandler}
          placeholder="description"
        />
        <input
          type="number"
          name="amount"
          onChange={changeHandler}
          placeholder="amount"
        />
      </div>
      <div className="radioBox">
        <label htmlFor="expense">
          <input
            type="radio"
            value="expense"
            name="type"
            checked={formValues.type === "expense"}
            id="expense"
            onChange={changeHandler}
          />
          Expense
        </label>
        <label htmlFor="income">
          <input
            type="radio"
            value="income"
            name="type"
            checked={formValues.type === "income"}
            id="income"
            onChange={changeHandler}
          />
          income
        </label>
      </div>
      <button type="submit" className="btn form-btn">
        Add Transaction
      </button>
    </form>
  );
};

export default TransActionForm;
