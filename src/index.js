import Translate from './components/Translate'

const MAX_NB_WORDS = 5

const translateComponent = new Translate()
const translateOptions = {
	from: 'en',
	to: 'fr'
}

let previousSelection = ''

document.addEventListener('mouseup', () => {
	const selectedText = document.getSelection().toString()
	const nbWords = selectedText.split(' ').length

	if (selectedText === ''
	|| selectedText === previousSelection
	|| nbWords > MAX_NB_WORDS) {
		previousSelection = ''
		translateComponent.hide()
		return
	}

	previousSelection = selectedText

	const options = {
		...translateOptions,
		input: selectedText
	}
	translateComponent.update(options)
})


