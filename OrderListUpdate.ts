type OrderState = 'Receieved' | 'Processing' | 'Delivered'
type Order = {
    id: number,
    state: OrderState
}

const updateOrderList = (orders: Order[], orderId: number, state: OrderState) => {
    // iterate over order {
    // if we find an orderI
    // make a copy of orders
    // if state -> delivered
    //delete at positon
    // if state -> processing
    // update order state and return copy
    // return orders

    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];
        if (order.id === orderId) {
            const ordersCopy = [...orders];
            if (state === 'Delivered') {
                ordersCopy.splice(i, 1);
                return ordersCopy;
            } else {
                const updatedOrder = {...order, state}
                ordersCopy[i].state = state;
                return ordersCopy;
            }
        }
    }
    return orders;
}

const testOrders: Order[] = [
    {
        id: 1,
        state: 'Receieved'
    },
    {
        id: 2,
        state: 'Receieved'
    },
    {
        id: 3,
        state: 'Receieved'
    },
    {
        id: 4,
        state: 'Receieved'
    },
]

console.log(updateOrderList(testOrders, 3, "Delivered"));
console.log(updateOrderList(testOrders, 1, "Delivered"));
console.log(updateOrderList(testOrders, 2, "Processing"));