import DateCalendar from "./DateCalendar";
import NumberGuest from "./NumberGuest";
import Person from "./Person";
import Time from "./Time";
import { useState,   useContext } from "react";
import { ExplorerContext } from "../../contexts/context";

const Order = ({ createNewOrder }) => {
  const { web3 } = useContext(ExplorerContext);
  const [numberOfGuests, setnumberOfGuests] = useState(1);
  const [data, setData] = useState(new Date().toISOString().substring(0, 10));
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");
  const [restId, setRestId] = useState(1);
  const [order, setOrder] = useState({
    numberOfGuests: 1,
    name: "",
    date: "",
    time: 1,
    restaurantId: 1,
  });

  const handleChangesDate = async () => {
    const test = await web3.bookingCount();
    // console.log("numberOfbookings :", Number(test));
    const bookings = await web3.listBookings();
    // console.log("avaliable date :", ...bookings);
  };

  const createOrder = async () => {
    createNewOrder(data, time, name, numberOfGuests, restId);
    setOrder({ data, time, name, numberOfGuests, restId });
  };

  return (
    <>
      <form
        className="formOrder col-12"
        onSubmit={(e) => {
          e.preventDefault();
          createOrder();
        }}
      >
        <div className="val" onChange={handleChangesDate}>
          <NumberGuest selectGuest={setnumberOfGuests} />
          <DateCalendar updateDate={setData} />
        </div>

        <Time updateTime={setTime} />
        <Person updateName={setName} />

        <div className="submit">
          <button className="button btn">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Order;
