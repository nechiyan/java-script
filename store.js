let store1 = [
    {
        name:"Apple" ,
        qty: 500,
        price: 50,
    },
    {
        name:"orange" ,
        qty: 100,
        price: 40,
    },
    {
        name:"mango" ,
        qty: 200,
        price: 100,
    },    
];
let store2 = [
    {
        name:"Apple" ,
        qty: 300,
        price: 35,
    },
    {
        name:"orange" ,
        qty: 120,
        price: 50,
    },
    {
        name:"mango" ,
        qty: 150,
        price: 85,
    },    
];
let store3 = [
    {
        name:"Apple" ,
        qty: 400,
        price: 50,
    },
    {
        name:"orange" ,
        qty: 120,
        price: 50,
    },
    {
        name:"mango" ,
        qty: 150,
        price: 65,
    },    
];
 
let store1_total =0;
let store2_total =0;
let store3_total =0;

store1.forEach((store1) => {
    store1_total = store1.qty * store1.price
})
store2.forEach((store2) => {
    store2_total = store2.qty * store2.price
})
store3.forEach((store3) => {
    store3_total = store3.qty * store3.price
})
let total_cost = {
    store1: store1_total,
    store2: store2_total,
    store3: store3_total,
}
console.log(total_cost);