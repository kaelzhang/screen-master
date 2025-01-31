const fs = require('fs')
const path = require('path')

const recordingArea = document.getElementById('recordingArea')
let events = []
let isRecording = false

// Create saved directory if it doesn't exist
const savedDir = path.join(__dirname, 'saved')
if (!fs.existsSync(savedDir)) {
  fs.mkdirSync(savedDir)
}

// Helper function to save events
function saveEvents () {
  if (events.length === 0) return

  const filename = `mouse-events-${Date.now()}.json`
  const filepath = path.join(savedDir, filename)

  fs.writeFileSync(filepath, JSON.stringify(events, null, 2))
  events = [] // Clear events after saving
}

// Event handlers
function recordEvent (e) {
  if (!isRecording) return

  events.push({
    type: e.type,
    x: e.offsetX,
    y: e.offsetY,
    timestamp: Date.now(),
    button: e.button,
    buttons: e.buttons,
    altKey: e.altKey,
    ctrlKey: e.ctrlKey,
    shiftKey: e.shiftKey,
    wheelDelta: e.type === 'wheel' ? e.deltaY : undefined
  })
}

// Add event listeners
recordingArea.addEventListener('mouseenter', e => {
  isRecording = true
  recordEvent(e)
})

recordingArea.addEventListener('mouseleave', e => {
  isRecording = false
  recordEvent(e)
  saveEvents()
})

// Record all mouse events
const mouseEvents = ['mousedown', 'mouseup', 'mousemove', 'wheel']
mouseEvents.forEach(eventType => {
  recordingArea.addEventListener(eventType, recordEvent)
})
