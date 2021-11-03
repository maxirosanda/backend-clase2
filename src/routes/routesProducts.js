import * as controllerProducts from '../controllers/controllerProducts.js'


const routesProducts = (app) => {


    app.get('/products',controllerProducts.viewEdits)
    app.post('/products',controllerProducts.create)
    app.delete('/products',controllerProducts.del)
    app.put('/products',controllerProducts.update)

}
export default routesProducts