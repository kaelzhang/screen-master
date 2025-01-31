export type MouseButton = Readonly<{
  Left: 'left'
  Right: 'right'
  Middle: 'middle'
}>

export interface MouseOptions {
  // Defaults to MouseButton.Left
  button?: MouseButton
}

export interface MouseWheelOptions {
  deltaX?: number
  deltaY?: number
}

export interface AtomicInputEventDelegate {
  async mouseMove (x: number, y: number): Promise<void>

  async mouseDown (options?: MouseOptions): Promise<void>

  // The param type of up is the same as down
  async mouseUp (options?: MouseOptions): Promise<void>

  async wheel (options?: MouseWheelOptions): Promise<void>

  async keyDown (keyCode: string): Promise<void>

  async keyUp (keyCode: string): Promise<void>
}
