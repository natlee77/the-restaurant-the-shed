import { useState, useContext, useEffect } from "react";
import AddOrder from "../components/Order/AddOrder";
import { ExplorerContext } from "../contexts/context";

import OrderClass from "../models/OrderClass";
import Error from "../components/Tools/Error";

const Order = () => {
  const [isLogged, setIsLogged] = useState(false)
  const [error, setError] = useState(null);
  
  const { web3 } = useContext(ExplorerContext);
  useEffect(() => {
    if(web3 && web3.account ) setIsLogged(true)
  }, [web3])

  const createOrder = async (data, time, name, numberOfGuests, restId) => {
    const bookings = await web3.bookings
    const order = new OrderClass(restId, name, numberOfGuests, data, time, bookings);
    const check = order.getValidation();

    if (check.validated) {
      await web3.createBooking(numberOfGuests, name, data, time, restId);
    } else {
      setError(check);
    }
  };

  const toggleError = () => {
    setError(null);
  };

  const toggleLogged = () => {
    setIsLogged(!isLogged);
  };

  return (
    <div className="booking container">
      {isLogged ? (
          <AddOrder createNewOrder={createOrder} />
        ) : (
          <div className="mm-msg">
            Connect to Metamask.
          </div>
        )}
      {error && <Error key={error.id} msgs={error.msg} toggle={toggleError} />}
    </div>
  );
};

export default Order;
