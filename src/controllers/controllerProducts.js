
let products = [


]


  export const viewEdits = async (req,res)=>{
    
    res.status(200).render('editProducts',{productsParaLaVista:products})
  
  }

  export const create = async (req,res)=>{
    let product = req.body
    product.id = Math.floor(Math.random()*1000000001)
    console.log(product)
    products.push(req.body)
  
    res.status(200).redirect('/products')
  
  }

  export const del = async (req,res)=>{
    console.log("pasa por el controller del")
    products = products.filter(element => element.id != req.body.id)
  
    res.status(200).redirect('/products')
  
  }

  export const update= async (req,res)=>{
    console.log("pasa por el controller update")
    let product = products.find(element => element.id=req.body.id)
    if(req.body.title){
      product.title = req.body.title
    }
    if(req.body.price){
      product.price = req.body.price
    }
    if(req.body.stock){
      product.stock = req.body.stock
    }
    console.log(product)
    res.status(200).redirect('/products')
  
  }
