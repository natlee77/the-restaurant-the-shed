// Order utilities

export const dateString = (date, off = 0, sep = '-') => {
    let newDate = new Date(date)
    newDate = `${newDate.getMonth()+1}${sep}${newDate.getDate()-off}${sep}${newDate.getFullYear()}`
    console.log('dateString: ', newDate)

    return newDate
}

// Validating order data
export const validateString = ( string ) =>  {
    if(string.trim().length < 3) return 'String needs to be longer that 3 characters...'
    if(string.trim().length > 20) return 'String needs to be no longer that 20 characters...'
    else return true
}

export const validateNum = ( num ) =>  {
    if(typeof +num !== "number") return 'Number of guests is not a number...'
    if(num < 1) return 'Number of guests has to be atleast 1...'
    else return true
}

export const validateDate = ( date ) => {
    const newDate = new Date(date)
    const yesterday = new Date(dateString(new Date(), 1))

    if(!newDate instanceof Date ) return 'Date is not in correct order...'
    if(newDate <= yesterday) return 'The date needs to be after today...'
    else return true
}

export const validateTime = ( time ) => {
    console.log(time, time === 18 || time === 21)
    if(time === 18 || time === 21) return true
    else return 'Not a valid time, seatings are at 18 and 21...'
}

export const validateBooking = (booking, date, time) => {
    let check = true
    let num = 0
    booking.map( book => {
        let bookDate = new Date(book.date)
        let newDate = new Date(date)

        let bookTime = String(book.time)
        let newTime = String(time)

        bookDate = `${bookDate.getMonth()+1} ${bookDate.getDate()}`
        newDate =  `${newDate.getMonth()+1} ${newDate.getDate()}`

        if(bookDate === newDate && bookTime === newTime){
            num ++;
        }
    })
    if(num >= 3){
        check ='This sitting is already booked.'
    }
    return check
}