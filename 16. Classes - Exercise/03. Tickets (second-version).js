function tickets(arr, criteria) {
    let result = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }

        static sortResultArray(resultArr) {
            return resultArr.sort((a, b) => {
                return criteria === "price" ?
                    a[criteria] - b[criteria] :
                    a[criteria].localeCompare(b[criteria]);
            });
        }
    }

    for (let el of arr) {
        let [destination, price, status] = el.split("|");
        let currentTicket = new Ticket(destination, price, status);
        result.push(currentTicket);
    }    

    return Ticket.sortResultArray(result);
}



console.log(tickets(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
)); 
