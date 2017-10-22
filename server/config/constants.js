const actions = {
  create: 'Create',
  update: 'Update',
  remove: 'Remove',
  find: 'Find',
  findAll: 'Find All'
}

const models = {
  user: {
    name: 'User',
    endpoint: 'users',
    preventDefaultApi: true,
    useCustomRoutes: true
  },
  product: {
    name: 'Product',
    endpoint: 'products',
    preventDefaultApi: true,
    useCustomRoutes: true
  },
}


module.exports = {
  actions,
  models
}