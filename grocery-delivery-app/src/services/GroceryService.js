export class GroceryService{
    static GroceryList = [
        {
         id:1,
         name:'Vim Fresh Lemon',
         image:'https://m.media-amazon.com/images/I/61jXOdOo8IL._SX679_.jpg',
         price:200,
         qty:1,
         type:"Amazon"
        },
        {
            id:2,
            name:'Fortune Premium Oil',
            image:'https://m.media-amazon.com/images/I/41YDq-tchUL.jpg',
            price:249,
            qty:1,
            type:"Amazon"
        },
        {
            id:3,
            name:'Colgate Toothpaste',
            image:'https://m.media-amazon.com/images/I/613h4cvL6TL._SX679_.jpg',
            price:182,
            qty:1,
            type:"Amazon"
           },
           {
               id:4,
               name:'Lays',
               image:'https://m.media-amazon.com/images/I/71XJHswiGqL._SX679_.jpg',
               price:40,
               qty:1,
               type:"Amazon"
           },
           {
            id:5,
            name:'Kinley Club Soda',
            image:'https://m.media-amazon.com/images/I/61DD7FiE82L._SX679_.jpg',
            price:200,
            qty:1,
            type:"Amazon"
           },
           {
               id:6,
               name:'Cadbury Chocobakes',
               image:'https://m.media-amazon.com/images/I/71wx4MDnSmL._SX679_.jpg',
               price:400,
               qty:1,
               type:"FlipKart"
           },
           {
            id:7,
            name:'Parle Monaco',
            image:'https://m.media-amazon.com/images/I/610cAP-hO4L._SX679_.jpg',
            price:105,
            qty:1,
            type:"FlipKart"
           },
           {
               id:8,
               name:'Sunfeast YiPPee! ',
               image:'https://m.media-amazon.com/images/I/81-Qq7lgcdL._SX679_.jpg',
               price:185,
               qty:1,
               type:"FlipKart"
           },
           {
            id:9,
            name:'Knorr Instant Veg Soup',
            image:'https://m.media-amazon.com/images/I/61r0lYWjI3L._SX679_.jpg',
            price:35,
            qty:1,
            type:"FlipKart"
           },
           {
               id:10,
               name:'Almonds Biscuits',
               image:'https://m.media-amazon.com/images/I/81Mi3dahRCL._SX679_.jpg',
               price:50,
               qty:1,
               type:"FlipKart"
           },
           {
            id:11,
            name:'TATA Salt',
            image:'https://m.media-amazon.com/images/I/61A3Mv1ejCS._SX679_.jpg',
            price:50,
            qty:1,
            type:"Dunzo"
           },
           {
            id:12,
            name:'MAGGI',
            image:'https://m.media-amazon.com/images/I/81zu71BqgLL._SX679_.jpg',
            price:50,
            qty:1,
            type:"Dunzo"
          },
          {
            id:13,
            name:'Kurkure Namkeen',
            image:'https://m.media-amazon.com/images/I/71OKcnJYceL._SX679_.jpg',
            price:30,
            qty:1,
            type:"Dunzo"
         },
         {
            id:14,
            name:'Dry Fruits Combos',
            image:'https://m.media-amazon.com/images/I/71RgUkqWEXL._SX679_.jpg',
            price:999,
            qty:1,
            type:"Dunzo"
         },
         {
            id:15,
            name:'Nutraj Daily Needs Fresh',
            image:'https://m.media-amazon.com/images/I/813IQ2fsFyL._SX679_PIbundle-4,TopRight,0,0_AA679SH20_.jpg',
            price:450,
            qty:1,
            type:"Dunzo"
        },
           

    ]
     static  getAllGeoceries(){
         return this.GroceryList;
     }
} 

export class GroceryTypeService{
    static groceryTypeList =[{id:1,name:"Amazon"},{id:2,name:"FlipKart"},{id:3,name:"Dunzo"}]
    static getAllGroceryType(){
        return this.groceryTypeList;
    }
}