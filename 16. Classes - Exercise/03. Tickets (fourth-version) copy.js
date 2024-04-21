function tickets(arr, criteria) {
    class Ticket {
        static _ticketsArray = [];

        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }

        static get ticketsArray() {
            return this._ticketsArray.sort((a, b) => {
                return criteria === "price" ?
                    a[criteria] - b[criteria] :
                    a[criteria].localeCompare(b[criteria]);
            });
        }

        static set ticketsArray(infoArray) {
            for (let el of infoArray) {
                let [destination, price, status] = el.split("|");
                let currentTicket = new Ticket(destination, price, status);
                this._ticketsArray.push(currentTicket);
            };
        }
    }

    Ticket.ticketsArray = arr;
    return Ticket.ticketsArray;
}



console.log(tickets(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
)); 
