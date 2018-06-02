import Translate from './components/Translate'

const translateComponent = new Translate()
const translateOptions = {
	from: 'en',
	to: 'fr'
}

let previousSelection = ''

document.addEventListener('mouseup', () => {
	const selectedText = document.getSelection().toString()

	if (selectedText === ''
	|| selectedText === null
	|| selectedText === previousSelection) {
		// there is no selections or user has unselect text.
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


