

const ProductArray =[
    {
        id:"1",
        title:"hsf",
        price:"42"
    },
    {
        id:"1",
        title:"hsf",
        price:"42"
    },
    {
        id:"2",
        title:"hsf",
        price:"42"
    },
    {
        id:"3",
        title:"hsf",
        price:"42"
    },
]

const getData(id){
    let data = ProductArray.find(product => product.id===id)
    if(data == undefined){
        return undefined;
    }
    return data;
}

export {ProductArray,getData}