export default function(state, action) {
	if (state === undefined) {
		return ""
	}

	switch(action.type) {
		case "SETWORD":
			return action.payload
		default:
			return state
	}
}