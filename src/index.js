const randomStartingPoint = (x, y, width, height) => {
  return {
    x: Math.floor(Math.random() * 100),
    y: Math.floor(Math.random() * 100)
  }
}

class ScreenMaster {
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
    this.__delegate = delegate

    return this
  }

  get _delegate () {
    if (!this.__delegate) {
      throw new Error('Delegate is not set')
    }

    return this.__delegate
  }

  async mouseMove (x, y) {

  }

  async click (x, y, {

  }) {

  }
}

module.exports = {
  ScreenMaster,
  randomStartingPoint
}
