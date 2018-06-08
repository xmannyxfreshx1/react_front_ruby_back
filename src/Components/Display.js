import React, { Component } from 'react';

const Display = props => {
    const contactList = props.contacts.map((info) =>
        <div key={info.id}>
            <h1>{info.first_name}, {info.last_name}</h1>
            <p>Phone Number: {info.phone}</p>
            <p>Email: {info.email}</p>

        </div>
    );
    return(
        <div>
            <p>Press enter to return info</p>
            <button onClick={props.getContactInfo}>Enter</button>
            {contactList}
            {console.log(props.contacts)}
            {console.log(contactList)}
        </div>
    );
};

const Array = [
    {
        id: 2,
        first_name: "Daniel",
        last_name: "Jacobs",
        phone: "9197747306",
        email: "daniel@example.com",
        created_at: "2018-06-07T19:08:05.964Z",
        updated_at: "2018-06-07T19:08:05.964Z"
    },
    {
        id: 3,
        first_name: "Canelo",
        last_name: "Alvarez",
        phone: "9197464465",
        email: "canelo@example.com",
        created_at: "2018-06-07T19:39:09.714Z",
        updated_at: "2018-06-07T19:39:09.714Z"
    }
    ]/*,
    {
        "id": 4,
        "first_name": "Gennady",
        "last_name": "Golovkin",
        "phone": "5777464465",
        "email": "ggg@example.com",
        "created_at": "2018-06-07T19:43:39.036Z",
        "updated_at": "2018-06-07T19:43:39.036Z"
    },
    {
        "id": 5,
        "first_name": "Kell",
        "last_name": "Brook",
        "phone": "6057464465",
        "email": "kbrook@example.com",
        "created_at": "2018-06-07T19:54:50.849Z",
        "updated_at": "2018-06-07T19:54:50.849Z"
    },
    {
        "id": 6,
        "first_name": null,
        "last_name": null,
        "phone": null,
        "email": null,
        "created_at": "2018-06-07T20:03:38.805Z",
        "updated_at": "2018-06-07T20:03:38.805Z"
    },
    {
        "id": 7,
        "first_name": null,
        "last_name": null,
        "phone": null,
        "email": null,
        "created_at": "2018-06-07T20:06:06.674Z",
        "updated_at": "2018-06-07T20:06:06.674Z"
    },
    {
        "id": 8,
        "first_name": null,
        "last_name": null,
        "phone": null,
        "email": null,
        "created_at": "2018-06-07T20:06:19.150Z",
        "updated_at": "2018-06-07T20:06:19.150Z"
    },
    {
        "id": 9,
        "first_name": null,
        "last_name": null,
        "phone": null,
        "email": null,
        "created_at": "2018-06-07T20:07:34.071Z",
        "updated_at": "2018-06-07T20:07:34.071Z"
    },
    {
        "id": 10,
        "first_name": "Narayan",
        "last_name": "Rai",
        "phone": null,
        "email": null,
        "created_at": "2018-06-07T20:14:55.577Z",
        "updated_at": "2018-06-07T20:14:55.577Z"
    },
    {
        "id": 11,
        "first_name": "Venkat",
        "last_name": "Siri",
        "phone": null,
        "email": null,
        created_at: "2018-06-07T20:17:11.122Z",
        updated_at: "2018-06-07T20:17:11.122Z"
    }
]*/


export default Display;
