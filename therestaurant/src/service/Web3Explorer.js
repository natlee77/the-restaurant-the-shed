import Web3 from "web3";
import contractArtifact from "../../../eth-restaurant/build/contracts/Restaurants.json";

// This is a workaround, to fetch the contract address
const latestTimestamp = Math.max(
  ...Object.keys(contractArtifact.networks).map(Number)
);

export default class Web3Explorer {
  #web3;
  #abi = contractArtifact.abi;
  #contractAddress = contractArtifact.networks[latestTimestamp].address; // <- Getting the contract address
  #contract;

  constructor() {
    this.eth = window.ethereum;
    this.status = this.eth ? true : false;
    this.accounts = null
    this.account = null
    this.bookings;
    this.loading = document.querySelector('#loader') // <- Setting the loading animation
  }

  // If Metamask is connected, the app connects.
  async connectToBlockchain(){
    if(this.status){
      this.loading.style.visibility = "visible"
      try {
        this.accounts = await this.eth.request({ method: 'eth_requestAccounts' })
        this.#web3 = new Web3(this.eth) // Init Web3.js
        this.account = this.accounts[0] // Setting main account
        this.#contract = new this.#web3.eth.Contract( this.#abi, this.#contractAddress )
        this.eth.on('accountsChanged', accounts => this.handleAccChanged(accounts)) // Event for switching account
        await this.loadInitData() // Loading restaurant, fetch bookings
        this.loading.style.visibility = "hidden"
        return this.account
      } catch (error) {
        console.error('connectToBlockchain: ', error)
        return 'Not connected...'
      }
    }else{
      return 'Download Metamask...'
    }
  }

  // Runs on startup
  async loadInitData(){
    const checkRes = await this.checkRestaurant() !== 0;
    if(!checkRes) await this.initRestaurant()
    await this.loadBookings()
  }

  // Loads all bookings to the Explorer
  async loadBookings() {
    this.bookings = await this.listBookings();
  }

  // If there is no restaurant, it gets created
  async initRestaurant() {
    const res = await this.#contract.methods.createRestaurant("The Shed").send(
      { from: this.account,gas: 500000 });
  }

  // Checking if there is an initiated restaurant
  async checkRestaurant() {
    const result = await this.#contract.methods.restaurantCount().call();
    return result;
  }

  // Gets the number of bookings
  async bookingCount() {
    try {
      const test = await this.#contract.methods.bookingCount().call();
      return test;
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  // Lists all the bookings
  async listBookings() {
    const count = await this.bookingCount(); // Make sure this function returns the number of bookings
    let temp = [];

    for (let id = 1; id <= count; id++) {
      const booking = await this.#contract.methods.bookings(id).call();
      if (booking.name !== "") temp.push(booking);
    }

    return temp;
  }

  // Creates a new booking
  async createBooking(numGuests, name, date, time) {
    try {
      this.loading.style.visibility = "visible"
      await this.#contract.methods.createBooking(numGuests, name, date, time, 1)
          .send({ from: this.account, gas: 500000 })
          .on('transactionHash', hash => { console.log('Transaction hash received', hash) })
          .on('confirmation', (confirmationNumber, receipt) => { console.log('Transaction confirmed', receipt)})
          .on('error', error => { console.error('Transaction error', error)})

      await this.loadBookings();
      this.loading.style.visibility = "hidden"
    } catch (error) {
      console.error("Error creating booking: ", error);
    }
  }

  // Edits bookings
  async editBooking(id, numGuests, name, date, time) {
    try {
      this.loading.style.visibility = "visible"
      await this.#contract.methods.editBooking(id, numGuests, name, date, time)
        .send({ from: this.account, gas: 500000 })
        .on('transactionHash', hash => { console.log('Transaction hash received', hash) })
        .on('confirmation', (confirmationNumber, receipt) => { console.log('Transaction confirmed', receipt)})
        .on('error', error => { console.error('Transaction error', error)})

      await this.loadBookings();
      this.loading.style.visibility = "hidden"
    } catch (error) {
      console.error("Edit booking error: ", error);
    }
  }

  // Removes bookings
  async removeBooking(id) {
    try {
      const res = await this.#contract.methods
        .removeBooking(id)
        .send({ from: this.account, gas: 500000 });

      await this.loadBookings();
    } catch (error) {
      console.error("Remove booking error: ", error);
    }
  }

  // Handle Account change.
  handleAccChanged(acc) {
    if (acc.length === 0) console.log("Metamask connected...");
    else {
      this.accounts = acc;
      this.account = this.accounts[0]
      console.log("Account updated: ", this.account);
    }
  }
}
