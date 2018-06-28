'use strict'

const CustomerHook = exports = module.exports = {}

CustomerHook.computeMapsUrl = (customers) => {
  return customers.map(customer => {
    const baseDirectionUrl = 'https://www.google.com/maps/dir/?api=1'
    const addressMapsUrl = `${baseDirectionUrl}&destination=${encodeURI(customer.address)}`
  
    customer.addressMapsUrl = addressMapsUrl
  })
}
