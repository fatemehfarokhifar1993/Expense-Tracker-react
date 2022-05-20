import { useEffect, useState } from "react";

const TransActionComponent = ({ transactions }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredtransactions, setFilteredtransactions] =
    useState(transactions);
  const filterTransactions = (search) => {
    if (!search || search === "") {
      setFilteredtransactions(transactions);
      return;
    }
    const filtered = filteredtransactions.filter((t) =>
      t.desc.toLowerCase().trim().includes(search.toLowerCase().trim())
    );
    setFilteredtransactions(filtered);
  };
  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filterTransactions(e.target.value);
  };
  useEffect(() => {
    filterTransactions(searchItem);
  }, [transactions]);

  if (!transactions.length)
    return <h3 className="add-some">add some transaction</h3>;
  return (
    <div className="transaction-container">
      <input
        type="text"
        value={searchItem}
        onChange={changeHandler}
        placeholder="search for transactions..."
        className="search"
      />
      {filteredtransactions.length
        ? filteredtransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="transaction"
              style={{
                borderRight: transaction.type === "expense" && "4px solid red",
              }}
            >
              <span> {transaction.desc}</span>
              <span>$ {transaction.amount}</span>
            </div>
          ))
        : "no item matchs !"}
    </div>
  );
};

export default TransActionComponent;
