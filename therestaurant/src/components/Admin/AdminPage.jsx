import { useContext, useState } from "react";
import { ExplorerContext } from "../../contexts/context";
import AdminOrder from "./AdminOrder";

const AdminPage = () => {
  const [active, setActive] = useState(null);

  const { web3 } = useContext(ExplorerContext);

  const toggleActive = () => {
    setActive(null);
  };

  return (
    <div className="admin-page">
      <h1>Admin Page</h1>
      {active && <AdminOrder order={active} toggle={toggleActive} />}
      {web3.bookings.map((order) => {
        return (
          <div
            key={order.id}
            className="order"
            onClick={(e) => setActive(order)}
          >
            <p>{order.name}</p>
            <p>{String(order.numberOfGuests)}</p>
            <p>{order.date}</p>
            <p>{String(order.time)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AdminPage;
