function solve() {
    let elements = document.getElementsByTagName('a');
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function () {
            let count = +this.nextElementSibling.textContent.split(' ')[1];
            console.log(count++);
            this.nextElementSibling.textContent = `Visited: ${count} times`;
        })

    }

}





