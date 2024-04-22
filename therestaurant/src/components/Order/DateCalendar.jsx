import { useState, useContext, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ExplorerContext } from "../../contexts/context";
import { dateString } from "../../utilities/orderUtils";
 


export   function DateCalendar({ updateDate }) {
  
   const [value, setValue] = useState(new Date().toISOString().substring(0, 10));
   const { web3 } = useContext(ExplorerContext);
   const [busyDate , setBusyDate] = useState(   );
   const [busyTime, setBusyTime] = useState(  );
 
  

    const checkDate = async ( ) => {
      const count = await web3.bookingCount();
      const listBookings = await web3.listBookings();
      let y = 0;
      for (let i = 0; i < count; i++) {
        if (listBookings[i].date === value && listBookings[i].time >= 15) {
            y++;  
          if(y >= 15)
          console.log('busy date', listBookings[i].date, listBookings[i].time);
          
            setBusyDate( [listBookings[i].date ]) ; 
            setBusyTime([ listBookings[i].time] ) 
        }
      }
      
    }
    

  const handleData = (e) => {
    updateDate(e.toLocaleDateString());
     setValue(e.toLocaleDateString());
     checkDate();
  };
  return (
  <>
    <div className="calendar">
      <Calendar
        minDate={new Date()}
        value={value}
        onClickDay={handleData}
      />
    </div>
    <div className="admin-page">
      <h1>upptagen date</h1>
      <div  className="order"  >
       <p>{busyDate}</p>  
      </div>
      <h1>upptagen time</h1>
      <div  className="order"  >
      <p>{busyTime }</p>  
      </div>
       {/* {web3.bookings.map((order) => {
        return (
          <div
            key={order.id}
            className="order"
             onClick={(e) => checkDate(order)}
          > 
            <p>{order.date}</p>
            <p>{String(order.time)}</p>
          </div>
        );
      })}   */}
    </div>
    </>
  );
}
export default DateCalendar;
