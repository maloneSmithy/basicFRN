const products = [
    {id:1,
     name:'potatoes',
     price:'$10'
    },
    {id:2,
     name:'guava',
     price:'$3'
    },
    {id:3,
     name:'mangoes',
     price:'$8'
    },
    {id:4,
     name:'cabage',
     price:'$40'
    },
]

export default function RenderList() {
const productlist= products.map(p=>{
    return (
        <div key={p.id} >
      <div>id: {p.id}</div>  
      <div>name: {p.name}</div>  
      <div>price: {p.price}</div> 
      </div> 
    )
})
  return (
    <div>
<h1>MY PRODUCTS</h1>
      {productlist}
    </div>
  )
}
