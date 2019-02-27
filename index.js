const app = "I don't do much."

function moveDodgerRight() {
  document.addEventListener('keydown', function(e) {
    if (e.which === 39) {
      moveDodgerLeft()
    }
  })
}