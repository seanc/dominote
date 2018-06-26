'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

const Factory = use('Factory')

/**
  Factory.blueprint('App/Models/User', (faker) => {
    return {
      username: faker.username()
    }
  })
*/

function getRandom(arr, n) {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

Factory.blueprint('App/Models/Customer', faker => {
  return {
    first_name: faker.first(),
    last_name: faker.last(),
    address: faker.address(),
    phone: faker.phone({ formatted: false })
  }
})

Factory.blueprint('Apps/Models/Order', (faker, i, data) => {
  return {
    user_id: data.user,
    customer_id: getRandom(data.customers, 1),
    items: getRandom(data.items, faker.natural({
      min: 1,
      max: 5
    })),
    total: faker.natural({
      min: 1500,
      max: 3000
    })
  }
})