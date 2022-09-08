// creating a object for user i.e. socket
const socket = io()


// receiving socket event "countUpdated" from server
socket.on('countUpdated', (count) => {
    console.log('The count has been updated!', count)
})

document.querySelector('#increment').addEventListener('click', () => {
    console.log('Clicked')
    // creating and sending event to server
    socket.emit('increment')
})