let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

var move = new Audio('sound/movement.mp3');
move.volume = 0.1;

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 }
            move.play();
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            move.play();
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            move.play();
            break
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            move.play();
            break
    }
})

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}