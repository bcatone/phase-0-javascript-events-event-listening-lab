function addingEventListener() {
    const input = document.getElementById('button');

    input.addEventListener(input, clickAlert);
}

const clickAlert = () => 'I was clicked!';