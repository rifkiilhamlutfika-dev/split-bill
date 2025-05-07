import { useState } from "react";

export default function FormSplitBill({ selectedBill, onSplitBill }) {
  const [amount, setAmount] = useState("");
  const [myBill, setMyBill] = useState("");
  const friendBill = amount ? amount - myBill : "";
  const [covered, setCovered] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!amount || !myBill) return;
    onSplitBill(covered === "user" ? friendBill : -myBill);
  }

  return (
    <>
      <form className="form-split-bill" action="" onSubmit={handleSubmit}>
        <h2>Split Bill With {selectedBill.name}</h2>

        <label htmlFor="">Total Biaya</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <label htmlFor="">Your Bill</label>
        <input
          type="text"
          value={myBill}
          onChange={(e) => setMyBill(e.target.value)}
        />

        <label htmlFor="">{selectedBill.name} Bill</label>
        <input type="text" value={friendBill} disabled />

        <label htmlFor="">Covered By</label>
        <select value={covered} onChange={(e) => setCovered(e.target.value)}>
          <option value="user">You</option>
          <option value="friend">{selectedBill.name}</option>
        </select>

        <button className="button">Add</button>
      </form>
    </>
  );
}
