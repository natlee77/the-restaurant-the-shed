function Time({ updateTime }) {
  const update = (e) => {
    updateTime(+e.target.value);
  };
  return (
    <>
      <div className="time" onClick={update}>
        <h4>Please select your time:</h4>
        <input type="radio" id="time1" name="time" value="18" />
        <label htmlFor="time1">18.00</label>

        <input type="radio" id="time2" name="time" value="21" />
        <label htmlFor="time2">21.00</label>
      </div>
    </>
  );
}

export default Time;
