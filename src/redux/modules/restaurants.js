export const Types = {
	SET_RESTAURANTS: 'restaurants/SET_RESTAURANTS',
	SET_RESTAURANT: 'restaurants/SET_RESTAURANT',
};

// {name: 'Nome do Restaurante', rating: 4, address: 'Endereço do Restaurante, n. 200', url: '../../assets/restaurante-fake.png'}
const initialState = {
	restaurants: [],
	restaurantSelected: null,
};


export default function reducer(state = initialState, action) {
	switch (action.type) {
		case Types.SET_RESTAURANTS:
			return { ...state, restaurants: action.payload };
		case Types.SET_RESTAURANT:
			return { ...state, restaurantselected: action.payload };
		default:
			return state;
	}
};


export function setRestaurants(restaurants) {
	return {
		type: Types.SET_RESTAURANTS,
		payload: restaurants,
	};
};


export function setRestaurant(restaurant) {
	return {
		type: Types.SET_RESTAURANT,
		payload: restaurant,
	};
};



