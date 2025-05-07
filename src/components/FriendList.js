import Friend from "./Friend";

export default function FriendList({ friends, onSelectedBill, selectedBill }) {
  return (
    <>
      <ul>
        {friends.map((item, idx) => (
          <Friend
            friend={item}
            key={item?.id}
            onSelectedBill={onSelectedBill}
            selectedBill={selectedBill}
          />
        ))}
      </ul>
    </>
  );
}
