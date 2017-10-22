let Products = require('../models/product')

module.exports = {
    getProducts: {
        path: '/products/',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get Products'
            Products.find({})
                .then(products => {
                    res.send(handleResponse(action, products))
                })
                .catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    findProduct: {
        path: '/products/:productId',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get Products'
            Products.findById(req.params.productId)
                .then(product => {
                    res.send(handleResponse(action, product))
                })
                .catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    createProduct: {
        path: '/products',
        reqType: 'post',
        method(req, res, next) {
            let action = 'Create New Product'
            var product = req.body
            product.creatorId = req.session.uid
            Products.create(product)
                .then(product => {
                    res.send(handleResponse(action, product))
                })
                .catch(error => {
                    return next(handleResponse(action, null, error))
                })
            // let model = new schema(req.body)
            // model.creatorId = req.session.uid
            // model.save()
            //     .then(data => {
            //         return res.send(handleResponse(action, data))
            //     })
            //     .catch(error => {
            //         return next(handleResponse(action, null, error))
            //     })
        }
    },
    incrementKeep: {
        path: '/keeps/increment/:keepId',
        reqType: 'post',
        method(req, res, next) {
            let action = 'Increment Keep Adds'
            Products.findById(req.params.keepId)
                .then(keep => {
                    keep.adds++
                    keep.save()
                    res.send(handleResponse(action, keep))
                })
                .catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    // postKeep: {
    //     path: '/keeps',
    //     reqType: 'post',
    //     method(req, res, next) {
    //         var action = actions.create

    //         let model = new schema(req.body)
    //         model.creatorId = req.session.uid

    //         model.save()
    //             .then(data => {
    //                 return res.send(handleResponse(action, data))
    //             })
    //             .catch(error => {
    //                 return next(handleResponse(action, null, error))
    //             })
    //     }
    // },
    // sharedBoards: {
    //     path: '/vaults/:vaultId/keeps',
    //     reqType: 'get',
    //     method(req, res, next) {
    //         let action = 'Get Vault Keeps'
    //         Vaults.findById(req.params.vaultId)
    //             .then(vault => {
    //                 var vaultKeeps = []
    //                 Keeps.find({ _id: { $in: vault.keeps } }).then(keeps => {
    //                     res.send(handleResponse(action, keeps))
    //                 })
    //             }).catch(error => {
    //                 return next(handleResponse(action, null, error))
    //             })
    //     }
    // }
}


function handleResponse(action, data, error) {
    var response = {
        action: action,
        data: data
    }
    if (error) {
        response.error = error
    }
    return response
}