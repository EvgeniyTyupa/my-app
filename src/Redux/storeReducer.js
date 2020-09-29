import banana from '../Assets/Images/banana.jpg';
import apple from '../Assets/Images/apple.jpg';
import papaya from '../Assets/Images/papaya.jpg';

let initialState = {
    items: [
        {
            id: 0,
            title: "banana",
            price: 10,
            image: banana,
            action: null,
            discount: 0,
            discountFrom: null,
            discountPerMove: 0
        },
        {
            id: 1,
            title: "apple",
            price: 8,
            image: apple,
            action: null,
            discount: 0,
            discountFrom: null,
            discountPerMove: 0
        },
        {
            id: 2,
            title: "papaya",
            price: 10,
            image: papaya,
            action: "25$ for 3!",
            discount: 0,
            discountFrom: 3,
            discountPerMove: 5
        }
    ],

}

const storeReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}


export default storeReducer;