import { useState } from "react";

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const alreadyData = {
      id: id,
      name: name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddFriend(alreadyData);
  }
  return (
    <>
      <form className="form-add-friend" onSubmit={handleSubmit}>
        <label className="">Name </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="">Image</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button className="button" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </>
  );
}
