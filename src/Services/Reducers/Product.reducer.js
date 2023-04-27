import { CREATE_PRODUCT, GETINFO_PRODUCT, PRODUCT_COUNT, VIEW_PRODUCT } from "../Consts/Action.type"

const initialState = {
    product : [],
    error : null,
    productInfo : null,
    productcount : 0,
    totalPrice : 0,
    editProduct : false
}

const ProductReducer = (state = initialState,action) => {

    switch(action.type){
        case CREATE_PRODUCT :
            return state;
            break;
        case VIEW_PRODUCT : 
            return {
                product : action.payload,
                error : null,
                productInfo : null,
                productcount : 0,
                totalPrice : action.payload.reduce((acc,currentValue) => {
                    return acc + parseInt(currentValue.price)
                },0),
                editProduct : false
            }
            break;
        case GETINFO_PRODUCT : 
            return{
                ...state,
                productInfo : action.payload,
                error : null,
                productcount : 0,
                editProduct : true
            }
            break;
        case PRODUCT_COUNT : 
            return{
                ...state,
                productcount : action.payload,
                productInfo : null,
                error : null,
                editProduct : false
            }
        default :
            return state;
    }
}

export default ProductReducer;