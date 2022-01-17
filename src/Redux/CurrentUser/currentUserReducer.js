export const CurrentUserReducer = (state = { currentUser: null }, action) => {
	switch (action.type) {
		case "setCurrentUser":
			return { currentUser: action.payload };
		default:
			return state;
	}
};
