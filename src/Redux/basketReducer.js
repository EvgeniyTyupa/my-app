const ADD_TO_BASKET = 'ADD_TO_BASKET';
const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
const SET_TOTAL_ITEMS_COUNT = 'SET_TOTAL_ITEMS_COUNT';
const SET_DISCOUNT = 'SET_DISCOUNT'; 

let initialState = {
    basket: [],
    itemsCount: 0 
}

const basketReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_BASKET: {
            if(state.basket.length > 0){
                state.basket.map(item => {
                    if(item.id == action.item.id){
                        item.count++;
                    }
                });
                if(!state.basket.find(item => item.id == action.item.id)){
                    action.item.count = 1;
                    state.basket.push(action.item);
                }
            }else{
                action.item.count = 1;
                state.basket.push(action.item);
            }
            
            return state;
        }
        
        case REMOVE_FROM_BASKET: {
            if(state.basket.length > 0){
                state.basket.map((item, index) => {
                    if(item.id == action.item.id){
                        if(item.count > 1){
                            item.count--;
                        }else{
                            if(state.basket.length == 1){
                                state.basket.shift();
                            }else{
                                state.basket.splice(index, 1);
                            }                           
                        }
                        
                    }
                });
            }
            return state;
        }
        case SET_DISCOUNT: {
            state.basket.map(item => {
                if(item.id == action.item.id){
                    if(item.discountFrom){
                        if(item.count % item.discountFrom == 0){
                            item.discount = (item.count / item.discountFrom) * item.discountPerMove;
                        }
                        if(item.count < 3){
                            item.discount = 0;
                        }
                    }
                    
                }
            })
            return state;
        }
        case SET_TOTAL_ITEMS_COUNT: {
            return { ...state, itemsCount: action.itemsCount }
        }
        default: 
            return state;
    }
}

export const addToBasket = (item) => ({
    type: ADD_TO_BASKET, item
});
export const removeFromBasket = (item) => ({
    type: REMOVE_FROM_BASKET, item
});
export const setTotalItemsCount = (itemsCount) => ({
    type: SET_TOTAL_ITEMS_COUNT, itemsCount
});
export const setDiscount = (item) => ({
    type: SET_DISCOUNT, item
})


export default basketReducer;
