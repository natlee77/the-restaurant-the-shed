import { useContext, useState } from "react";
import { ExplorerContext } from "../../contexts/context";

import OrderClass from "../../models/OrderClass";
import Error from "../Tools/Error";

const AdminOrder = ({ order, toggle }) => {
  const [num, setNum] = useState(String(order.numberOfGuests));
  const [date, setDate] = useState(order.date);
  const [time, setTime] = useState(String(order.time));
  const [error, setError] = useState(null)

  const { web3 } = useContext(ExplorerContext);

  const handleTime = (e) => {
    setTime(e.target.value);
  };

  const handleUpdate = async (e) => {
    e.preventDefault()
    const newOrder = new OrderClass(order.id, order.name, num, date, time, web3.bookings)
    const check = newOrder.getValidation()

    if(check.validated) {
      await web3.editBooking(newOrder.id, newOrder.numGuests, newOrder.name, newOrder.date, newOrder.time);
      toggle()
    } 
    else{
      console.log('handleUpdate: ', check)
      setError(check)
      console.log(error)
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault()
    await web3.removeBooking(order.id);
    await web3.connectToBlockchain()
    toggle()
  };
  
  const toggleError = () => {
    setError(null)
  }

  return (
    <div className="admin-order">
      {error && <Error key={error.id} msgs={error.msg} toggle={toggleError} />}
      <h1>{order.name}</h1>
      <form className="admin-form" action="submit">
        <input
          type="text"
          onChange={(e) => setNum(e.target.value)}
          placeholder={"Guests: " + num}
        />
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          min={new Date().toISOString().split('T')[0]}
          value={new Date(date).toISOString().split('T')[0]}
        />
        <div className="form-radio">
          18:00
          <input
            type="radio"
            value="18"
            checked={time === "18"}
            onChange={handleTime}
          />
          21:00
          <input
            type="radio"
            value="21"
            checked={time === "21"}
            onChange={handleTime}
          />
        </div>
        <button className="btn" onClick={toggle}>Toggle</button>
        <button  className="btn" onClick={e => handleUpdate(e)}>Save</button>
        <button className="btn" onClick={e => handleDelete(e)}>Remove</button>
      </form>
    </div>
  );
};

export default AdminOrder;
