import translate from 'translate'
import { API_KEY } from '../constants'

const COMPONENT_ID = 'select-to-translate'
const VISIBLE_CLASS = 'show-translate'
const NON_VISIBLE_CLASS = 'hide-translate'
const TIMEOUT_VISIBLE = 3000 //ms

export default class Translate {
	constructor() {
		const body = document.querySelector('body')
		const element = document.createElement('div')
		element.setAttribute('id', COMPONENT_ID)
		element.setAttribute('class', NON_VISIBLE_CLASS)
		element.addEventListener('click', this.hide.bind(this))
		body.appendChild(element)

		this.element = element
	}

	_clearTimeout() {
		if (this.timeoutId === null) {
			// no timout is run
			return
		}

		clearTimeout(this.timeoutId)
		this.timeoutId = null
	}

	_onclick() {
		this.hide()
		this._clearTimeout()
	}
	
	_refreshElement(newTextContent) {
		this._clearTimeout()
		this.element.textContent = newTextContent.toUpperCase()
		this.show()
		this.timeoutId = setTimeout(this.hide.bind(this), TIMEOUT_VISIBLE)
	}

	show() {
		this.element.setAttribute('class', VISIBLE_CLASS)
	}

	hide() {
		this._clearTimeout()
		this.element.setAttribute('class', NON_VISIBLE_CLASS)
	}

	update({ input, ...translateOptions }) {
		const options = {
			...translateOptions,
			key: API_KEY,
			engine: 'yandex'
		}

		translate(input, options)
		.then(text => this._refreshElement(text))
	}
}