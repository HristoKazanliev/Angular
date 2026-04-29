import { Ticket } from "./Ticket";

function sortTickets(arrInput: string[], criteria: string) : Ticket[]{
    let arrTickets: Ticket[] = []

    arrInput.forEach(line => {
        const [destination, price, status] = line.split("|");
        const priceNum = Number(price);

        const newTicket = new Ticket(destination, priceNum, status);
        arrTickets.push(newTicket);
    });

    //let sortedTickets: Ticket[] = [];
    
    switch (criteria) {
        case "destination":
            arrTickets = arrTickets.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case "price":
            arrTickets = arrTickets.sort((a, b) => a.price - b.price);
            break;
        case "status":
            arrTickets = arrTickets.sort((a, b) => a.status.localeCompare(b.status));
            break;
        default:
            break;
    }

    return arrTickets;
}

console.log(sortTickets([
'Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'
],
'destination'
));

console.log(sortTickets([
'Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'
],
'status'
));

