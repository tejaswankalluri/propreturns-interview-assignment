# Propreturns interview assignment

## Features

-   Created a NextJs Application which retrives the data from api

-   access the api through graphql

-   connected to mongodb

-   full text search

## Tech Stack

**FullStack:** NextJs, Typescript, PostgreSQL, Graphql

## Installations

-   First clone this repo

-   Install node in your pc (**version 16**) [Node.js download](https://nodejs.org/)

-   Install yarn

    `npm install -g yarn`

-   Type 👇 in terminal

    `cd propreturns-interview-assignment`

-   Create .env and add env from .env.example

-   `yarn install`

-   Type 👇 in terminal to start server

    `yarn dev`

# walkthrough

-   UI Output

    ![terminal_output](https://github.com/tejaswankalluri/propreturns-interview-assignment/blob/main/docs/outupt_ui.png?raw=true)

-   Graphql Api

    ![output](https://github.com/tejaswankalluri/propreturns-interview-assignment/blob/main/docs/apigraphql.png?raw=true)

# Graphql Queries

```graphql
query getproperties {
    GetProperties {
        _id
        name
        price
        propertyType
        saleType
        address
        images
    }
}
query getproperty {
    GetProperty(_id: "63ced3917ad66548e3540d5c") {
        _id
        name
    }
}
mutation PostProperties {
    PostProperty(
        input: {
            name: "Mansion at Village"
            price: 500000
            address: "112 E 1st St, Marshfield, West Virginia"
            propertyType: House
            saleType: ForSale
            images: [
                "https://images.pexels.com/photos/259646/pexels-photo-259646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ]
        }
    ) {
        name
        propertyType
        saleType
        price
        images
    }
}
mutation UpdateProperty {
    UpdateProperty(
        _id: "63ced3917ad66548e3540d5c"
        input: {
            name: "test"
            price: 100
            address: "testaddress23"
            propertyType: House
            saleType: ForSale
            images: ["http://udpate.com"]
        }
    ) {
        _id
        name
    }
}
mutation DeleteProperty {
    DeleteProperty(_id: "63cf78e2173b33bb250ffdc0") {
        name
        _id
    }
}
```
