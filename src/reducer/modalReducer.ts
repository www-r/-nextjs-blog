export const modalReducer = (state, action) => {
	switch (action.type) {
		case 'close':
			return false;
		case 'open':
			return true;
		default:
			throw new Error();
	}
};
