function tickets(arr, criteria) {
    class Ticket {
        static ticketsArray = [];

        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }

        static collectTickets() {
            for (let el of arr) {
                let [destination, price, status] = el.split("|");
                let currentTicket = new Ticket(destination, price, status);
                this.ticketsArray.push(currentTicket);
            }; 
        }

        static sortTicketsArray() {
            return this.ticketsArray.sort((a, b) => {
                return criteria === "price" ?
                    a[criteria] - b[criteria] :
                    a[criteria].localeCompare(b[criteria]);
            });
        }
    }      

    Ticket.collectTickets();
    return Ticket.sortTicketsArray();
}



console.log(tickets(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
)); 
