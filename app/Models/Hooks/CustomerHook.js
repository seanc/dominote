'use strict'

const CustomerHook = exports = module.exports = {}

const Env = use('Env')

CustomerHook.computeMapsUrl = (customers) => {
  return customers.map(customer => {
    const baseDirectionUrl = 'https://www.google.com/maps/dir/?api=1'
    const originId = Env.get('MAPS_ORIGIN_ID', 'ChIJA5mrT5qbskwRDMzvDCpo79s')
    const origin = encodeURI(Env.get('MAPS_ORIGIN'))

    const addressMapsUrl = `${baseDirectionUrl}&origin_id=${originId}&origin=${origin}&destination=${encodeURI(customer.address)}`
  
    customer.addressMapsUrl = addressMapsUrl
  })
}
