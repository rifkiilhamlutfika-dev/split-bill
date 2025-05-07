import { useState } from "react";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";

const initialFriends = [
  {
    id: 118836,
    name: "Budi",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sukma",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Parjo",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);

  function handleAddFriend(friend) {
    setFriends((prev) => [...prev, friend]);
  }

  function handleSelectedBill(friend) {
    setSelectedBill((prev) => (prev?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends(
      friends.map((item) => {
        console.log(item);
        console.log(selectedBill?.id);

        if (item.id === selectedBill?.id) {
          return {
            ...item,
            balance: item.balance + value,
          };
        }
        return item;
      })
    );

    setSelectedBill(null);
  }

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendList
            friends={friends}
            onSelectedBill={handleSelectedBill}
            selectedBill={selectedBill}
          />
          {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
          <button
            className="button"
            onClick={() => {
              setShowAddFriend((prev) => !prev);
              setSelectedBill(null);
            }}
          >
            {showAddFriend ? "Close" : "Add Friend"}
          </button>
        </div>
        {selectedBill !== null && (
          <FormSplitBill
            selectedBill={selectedBill}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </>
  );
}
