export default function(state,action) {
	if (state === undefined) {
		return []
	}
	switch (action.type) {
		case "SETLETTERS":
			return action.payload;
		default:
			return state;
	}
}