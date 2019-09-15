const redux = require('redux');
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";

// Action
function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'fist redux action'
    }
}

// Aplication state
const initialState = {
    numOfCakes: 10
}

// Reducer
// (previousState, action) => newState

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}

 const store = createStore(reducer);
 console.log('Initial state', store.getState());
 const unsubscribed =  store.subscribe(()=>console.log('updated state', store.getState()))

 store.dispatch(buyCake())
 store.dispatch(buyCake())
 store.dispatch(buyCake())
 store.dispatch(buyCake())

 unsubscribed();

