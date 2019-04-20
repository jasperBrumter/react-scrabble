export function setLetters() {

	return fetch(`https://scrabbled-eggs.herokuapp.com/api/v1/en/letters`)
	.then(response => response.json())
	.then((data) => {
		return({
			type:"SETLETTERS",
			payload: data.data.letters
		})
	})
}