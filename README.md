# Hotel management system

This project is a basic API built for educational purposes to dive deeper into the concepts of **MongoDB** and **Mongoose**. With this project, I was able to understand more convoluted concepts about databases such as indexes. Since this application was meant to be just a study project, ***payments wasn't implemented***. With this API, the client should be able to manage an hotel, adding, removing and updating customers, staff members, rooms and reservations. Let's see how it works.

## Customers

### Add new customer
```
POST -> API_URL/customers/new


REQUEST_BODY -> {
    firstName: String
    lastName: String,
    phone: Number.
    country: String,
    city: String,
    street: String,
    zipcode: Number
}
```

### Get customers
```
GET -> API_URL/customers/new
```

### Get customer
```
GET -> API_URL/customers/find/:id
```

### Update customer
```
PUT -> API_URL/customers/new


REQUEST_BODY -> {
    firstName: String 
    lastName: String, 
    phone: Number.
    country: String,
    city: String,
    street: String,
    zipcode: Number
}

Obs.: The body fields are optional, the application will update only the ones that was passed.
```

### Delete customer
```
DELETE -> API_URL/customers/delete/:id
```

***

## Employees
### Add new employee
```
POST -> API_URL/employees/new


REQUEST_BODY -> {
    firstName: String
    lastName: String,
    phone: Number.
    country: String,
    city: String,
    street: String,
    zipcode: Number
}
```

### Get employees
```
GET -> API_URL/employees/new
```

### Get employee
```
GET -> API_URL/employees/find/:id
```

### Update employee
```
PUT -> API_URL/employees/new


REQUEST_BODY -> {
    firstName: String 
    lastName: String, 
    phone: Number.
    country: String,
    city: String,
    street: String,
    zipcode: Number
}

Obs.: The body fields are optional, the application will update only the ones that was passed.
```

### Delete employee
```
DELETE -> API_URL/employees/delete/:id
```

***

## Rooms
### Add new room
```
POST -> API_URL/rooms/new


REQUEST_BODY -> {
    pricePerHour: Number 
    maxPeople: Number, 
    bedrooms: Number.
    bathrooms: Number,
    livingRoom: Number,
    status: String,
    roomType: String
}
```

### Get room
```
GET -> API_URL/rooms/new
```

### Get room
```
GET -> API_URL/rooms/find/:id
```

### Update room
```
PUT -> API_URL/rooms/new


REQUEST_BODY -> {
    pricePerHour: Number 
    maxPeople: Number, 
    bedrooms: Number.
    bathrooms: Number,
    livingRoom: Number,
    status: String,
    roomType: String
}

Obs.: The body fields are optional, the application will update only the ones that was passed.
```

### Delete room
```
DELETE -> API_URL/rooms/delete/:id
```

***

## Reservations

### Add new reservation
```
POST -> API_URL/reservations/new


REQUEST_BODY -> {
    checkIn: String 
    checkOut: String, 
    customerEmail: String.
    roomId: String,
}

checkIn and checkOut example: March 25, 2022, 10:30
```

### Get reservation
```
GET -> API_URL/reservations/new
```

### Get reservation
```
GET -> API_URL/reservations/find/:id
```

### Update reservation
```
To update an reservation the client need to dele the existing reservation and create a new one. 
```

### Delete reservation
```
DELETE -> API_URL/reservations/delete/:id
```

***

## Technologies used
1. Nodejs
2. Express
3. Mongoose
   
***

## Environment variables
1. DB_URL

***

## Author (s)
* Eduardo Oliveira
