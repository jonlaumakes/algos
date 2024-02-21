var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var updateOrderList = function (orders, orderId, state) {
    // iterate over order {
    // if we find an orderI
    // make a copy of orders
    // if state -> delivered
    //delete at positon
    // if state -> processing
    // update order state and return copy
    // return orders
    for (var i = 0; i < orders.length; i++) {
        var order = orders[i];
        if (order.id === orderId) {
            var ordersCopy = __spreadArray([], orders, true);
            if (state === 'Delivered') {
                ordersCopy.splice(i, 1);
                return ordersCopy;
            }
            else {
                var updatedOrder = __assign(__assign({}, order), { state: state });
                ordersCopy[i].state = state;
                return ordersCopy;
            }
        }
    }
    return orders;
};
var testOrders = [
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
];
console.log(updateOrderList(testOrders, 3, "Delivered"));
console.log(updateOrderList(testOrders, 1, "Delivered"));
console.log(updateOrderList(testOrders, 2, "Processing"));
