import { validateString, validateNum, validateDate, validateBooking, validateTime } from "../utilities/orderUtils"

export default class OrderClass{
    #validator = {validated: true, msg: []}
    constructor( id, name, numGuests, date, time, bookings ){
        this.id = id
        this.name = name,
        this.numGuests = +numGuests
        this.date = date
        this.time = time
        this.bookings = bookings

        this.validateOrder()
    }

    validateOrder(check){
       const checkedName = validateString(this.name)
       const checkedNum = validateNum(this.numGuests)
       const checkedDate = validateDate(new Date(this.date))
       const checkedTime = validateTime(this.time)
       const checkedBooking= validateBooking(this.bookings, this.date, this.time)
       console.log('OrderClass1: ', checkedTime)


       if(checkedName !== true || checkedNum !== true || checkedDate !== true || checkedTime !== true || checkedBooking !== true){
        this.#validator.validated = false,
        this.#validator.id = this.id
       }
       if(typeof checkedName === 'string') {
        this.#validator.msg.push(checkedName)
       }
       if(typeof checkedNum === 'string'){
        this.#validator.msg.push(checkedNum)
       }
       if(typeof checkedDate === 'string'){
        this.#validator.msg.push(checkedDate)
       }
       if(typeof checkedTime === 'string'){
        console.log('OrderClass: ', checkedTime)
        this.#validator.msg.push(checkedTime)
       }
       if(typeof checkedBooking === 'string'){
        this.#validator.msg.push(checkedBooking)
       }
    }

    getValidation(){
        return this.#validator
    }
}
