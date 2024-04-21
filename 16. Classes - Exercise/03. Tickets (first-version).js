function tickets(arr, criteria) {
    let result = [];

    class Ticket{
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;    
        }
    }

    for (let el of arr) {
        let [destination, price, status] = el.split("|");
        let currentTicket = new Ticket(destination, price, status);
        result.push(currentTicket);
    }

    let criteriaCallback = criteria === "price" ? (a,b) => a[criteria] - b[criteria] : (a,b) => a[criteria].localeCompare(b[criteria]);

    return result.sort(criteriaCallback);
}



console.log(tickets(
    ['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
   'status'
   )); 
