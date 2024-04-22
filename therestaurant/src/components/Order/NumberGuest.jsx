const NumberGuest = ({ selectGuest }) => {
  const handleChange = (e) => {
    selectGuest(+e.target.value);
  };
  return (
    <>
      <div className="guests">
        <label htmlFor="numberOfGuests" className="labelForm">
          Select a number of guests:
        </label>
        <select
          id="numberOfGuests"
          name="numberOfGuests"
          onChange={handleChange}
          required
        >
          <option value="">Guests</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
    </>
  );
};

export default NumberGuest;
