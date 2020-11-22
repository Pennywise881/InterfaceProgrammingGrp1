var socket = io();

var vm = new Vue({
    el: '#myinfo',
    data: {
        // orders: {},
        message: "My Name is Nafi Uz Zaman",
        userid: "",
        name: "",
        age: 0,
    },
    created: function ()
    {
        // socket.on('initialize', function (data)
        // {
        //     this.orders = data.orders;
        // }.bind(this));

        // socket.on('currentQueue', function (data)
        // {
        //     this.orders = data.orders;
        // }.bind(this));

        socket.on('welcome', function (data)
        {
            console.log("This is your socket id: " + data);
            // if (this.userid === "") this.userid = data;

        }.bind(this));
    },
    methods: {
        // getNext: function ()
        // {
        //     var lastOrder = Object.keys(this.orders).reduce(function (last, next)
        //     {
        //         return Math.max(last, next);
        //     }, 0);
        //     return lastOrder + 1;
        // },
        buttonPressed: function (/*event*/)
        {
            // socket.emit("addOrder", {
            //     orderId: this.getNext(),
            //     details: {
            //         x: event.clientX - 10 - event.currentTarget.getBoundingClientRect().left,
            //         y: event.clientY - 10 - event.currentTarget.getBoundingClientRect().top
            //     },
            //     orderItems: ["Beans", "Curry"]
            // });

            socket.emit("buttonPressed", this.message);
            // console.log("Check VS Code console");
        }
    }
});