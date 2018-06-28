'use strict'

const OrderHook = exports = module.exports = {}

const StoreItem = use('App/Models/StoreItem')

OrderHook.resolveItems = async (modelInstances) => {
  modelInstances = Array.isArray(modelInstances) ? modelInstances : [modelInstances]

  const newModelInstances = []

  for (let modelInstance of modelInstances) {
    const itemCodes = modelInstance.items.split(',')
    const items = await StoreItem
      .query()
      .whereIn('id', itemCodes)
      .fetch()
  
    modelInstance['__meta__']['items'] = items

    newModelInstances.push(modelInstance)
  }
  
  return newModelInstances
}
