const {
  setTimeout
} = require('node:timers/promises')

const BUTTON_LEFT = 'left'

const randomStartingPoint = (x, y, width, height) => {
  return {
    x: Math.floor(Math.random() * 100),
    y: Math.floor(Math.random() * 100)
  }
}

class EventSynthesizer {
  constructor ({
    startingPoint,
    touchScreen = false,
    leftHand = true,
    delegate
  } = {}) {
    this.delegate(delegate)
    this._startingPoint = startingPoint
    this._touchScreen = touchScreen
    this._leftHand = leftHand
  }

  randomStartingPoint (...args) {
    this._startingPoint = randomStartingPoint(...args)

    return this
  }

  delegate (delegate) {
    this.#_delegate = delegate

    return this
  }

  get #delegate () {
    if (!this.#_delegate) {
      throw new Error('Delegate is not set')
    }

    return this.#_delegate
  }

  async mouseMove (x, y, {
    speedCurve,
    // Starting point of the movement.
    // If not provided, the internal current mouse position will be used.
    from
  } = {}) {
    await this.#delegate.mouseMove(x, y)
  }

  async click (x, y, {
    count = 1,
    delay = 0,
    button = BUTTON_LEFT
  } = {}) {
    const actions = []

    for (let i = 0; i < count; i ++) {
      await this.#delegate.mouseDown(x, y, {button})
      await this.#delegate.mouseUp(x, y, {button})

      if (delay) {
        await setTimeout(delay)
      }
    }
  }

  async press (accelerator) {
    await this.#delegate.keyDown(accelerator)
    await this.#delegate.keyUp(accelerator)
  }

  async swipe () {

  }
}

module.exports = {
  EventSynthesizer,
  randomStartingPoint
}
