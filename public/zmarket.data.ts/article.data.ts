import { ArticleDto } from "../dto/article.dto";
import { ArtilesByCategory } from "../dto/articlesByCatalog.dto";

export const articleDatas : ArtilesByCategory []= [
    
    {
        id:'1',
        name:'Meubles',
        articles :[
            {
                "id": '1',
                "name": "Lit 2 places",
                "description": "8558 Green Rd.",
                "phone": "671863552",
                "address": {
                    "street": "Melen",
                    "city": "Yaounde",
                    "state": "Centre",
                    "country": "Cameroun",
                    "longitude": "string",
                    "latitude": "string"
                },
                "price": "7,255",
                "img": ["/img/featured-img-2.jpg", "/img/featured-img-3.jpg", "/img/featured-img-4.jpg", "/img/featured-img-5.jpg"],
                "cateorygId":"1"
            },
            {
                "id": '2',
                "name": "Bureau avec fauteuil",
                "description": "8558 Green Rd.",
                "phone": "671863552",
                "address": {
                    "street": "Melen",
                    "city": "Yaounde",
                    "state": "Centre",
                    "country": "Cameroun",
                    "longitude": "string",
                    "latitude": "string"
                },
                "price": "7,255",
                "img": ["/img/featured-img-3.jpg", "/img/featured-img-4.jpg", "/img/featured-img-5.jpg", "/img/featured-img-6.jpg"],
                "cateorygId":"1"
            },
            {
                "id": '3',
                "name": "Bouilloire électrique",
                "description": "3890 Poplar Dr.",
                "phone": "671863552",
                "address": {
                    "street": "Melen",
                    "city": "Yaounde",
                    "state": "Centre",
                    "country": "Cameroun",
                    "longitude": "string",
                    "latitude": "string"
                },
                "price": "5,256",
                "img": ["/img/featured-img-1.jpg"],
                "cateorygId":"1"
            },
            {
                "id": '4',
                "name": "Table d'étude",
                "description": "8558 Parker Rd.",
                "phone": "671863552",
                "address": {
                    "street": "Melen",
                    "city": "Yaounde",
                    "state": "Centre",
                    "country": "Cameroun",
                    "longitude": "string",
                    "latitude": "string"
                },
                "price": "7,255",
                "img": ["/img/featured-img-4.jpg", "/img/featured-img-5.jpg", "/img/featured-img-6.jpg", "/img/featured-img-1.jpg"],
                "cateorygId":"1"
            },
        ]
    },
    {
        id:'2',
        name:'Studios',
        articles :[
            {
                "id": '5',
                "name": "Dollar General - 5416 Rock Quarry Rd, Raleigh, NC 27610",
                "description": "8558 Green Rd.",
                "phone": "671863552",
                "address": {
                    "street": "Melen",
                    "city": "Yaounde",
                    "state": "Centre",
                    "country": "Cameroun",
                    "longitude": "string",
                    "latitude": "string"
                },
                "price": "7,255",
                "img": ["/img/featured-img-5.jpg", "/img/featured-img-6.jpg", "/img/featured-img-4.jpg", "/img/featured-img-2.jpg"],
                "cateorygId":"2"
            },
            {
                "id": '6',
                "name": "RCE Theaters - 907 S Beckford Dr, Henderson, NC 27536",
                "description": "8558 Pecan St.",
                "phone": "671863552",
                "address": {
                    "street": "Melen",
                    "city": "Yaounde",
                    "state": "Centre",
                    "country": "Cameroun",
                    "longitude": "string",
                    "latitude": "string"
                },
                "price": "7,255",
                "img": ["/img/featured-img-6.jpg", "/img/featured-img-3.jpg", "/img/featured-img-4.jpg", "/img/featured-img-5.jpg"],
                "cateorygId":"2"
            },
            {
                "id": '7',
                "name": "Costco Wholesale - 1021 Oak Forest Ln, Myrtle Beach, SC",
                "description": "8558 Parker Rd.",
                "phone": "671863552",
                "address": {
                    "street": "Melen",
                    "city": "Yaounde",
                    "state": "Centre",
                    "country": "Cameroun",
                    "longitude": "string",
                    "latitude": "string"
                },
                "price": "7,255",
                "img": ["/img/featured-img-4.jpg", "/img/featured-img-5.jpg", "/img/featured-img-6.jpg", "/img/featured-img-1.jpg"],
                "cateorygId":"2"
            },
        ]
    },
    
    {
        id:'3',
        name:'Basard',
        articles :[
            {
                "id": '8',
                "name": "Regal North Hills - 4150 Main at North Hills St, Releigh",
                "description": "3890 Poplar Dr.",
                "phone": "671863552",
                "address": {
                    "street": "Melen",
                    "city": "Yaounde",
                    "state": "Centre",
                    "country": "Cameroun",
                    "longitude": "string",
                    "latitude": "string"
                },
                "price": "5,256",
                "img": ["/img/featured-img-1.jpg"],
                "cateorygId":"3"
            },
            {
                "id": '9',
                "name": "Spring Lane Cinemas - 1351 Plaza Blvd, Sanford, NC 27330",
                "description": "8558 Green Rd.",
                "phone": "671863552",
                "address": {
                    "street": "string",
                    "city": "Douala",
                    "state": "string",
                    "country": "string",
                    "longitude": "string",
                    "latitude": "string"
                },
                "price": "7,255",
                "img": ["/img/featured-img-2.jpg", "/img/featured-img-3.jpg", "/img/featured-img-4.jpg", "/img/featured-img-5.jpg"],
                "cateorygId":"3"
            },
            {
                "id": '10',
                "name": "RCE Theaters - 907 S Beckford Dr, Henderson, NC 27536",
                "description": "8558 Green Rd.",
                "phone": "671863552",
                "address": {
                    "street": "string",
                    "city": "string",
                    "state": "string",
                    "country": "string",
                    "longitude": "string",
                    "latitude": "string"
                },
                "price": "7,255",
                "img": ["/img/featured-img-3.jpg", "/img/featured-img-4.jpg", "/img/featured-img-5.jpg", "/img/featured-img-6.jpg"],
                "cateorygId":"3"
            },
            {
                "id": '11',
                "name": "Dollar General - 5416 Rock Quarry Rd, Raleigh, NC 27610",
                "description": "8558 Green Rd.",
                "phone": "671863552",
                "address": {
                    "street": "string",
                    "city": "string",
                    "state": "string",
                    "country": "string",
                    "longitude": "string",
                    "latitude": "string"
                },
                "price": "7,255",
                "img": ["/img/featured-img-5.jpg", "/img/featured-img-6.jpg", "/img/featured-img-4.jpg", "/img/featured-img-2.jpg"],
                "cateorygId":"3"
            }
        ]

    }
    
    
]
