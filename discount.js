/* 
1. if ticket number is less than 100, per ticket price : 100
2. if ticket numbers is more than 100, but less than 200. ticket price will be
 100/ticket rest tickets will be 90 tk per piece
 first 100-------->100 tk
 second 100--------> 90tk
3. if you purchase more than 200 tickets 
first 100-------> 100tk
101-200------> 90tk 
200+--------> 70tk */

function ticketPrice(tickets) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if (tickets < 100) {
        const price = tickets * first100Rate;
        return price;
    }
    else if (tickets <= 200) {
        const first100Price = 100 * first100Rate;
        const restTickets = tickets - 100;
        const restTicketPrice = restTickets * 90;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else {
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTickets = tickets - 200;
        const restTicketPrice = restTickets * 70;
        const totalPrice = first100Price + second100Price + restTicketPrice;
        return totalPrice;
    }
}
console.log(ticketPrice(220))