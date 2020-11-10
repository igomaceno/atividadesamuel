const seqfibonacci = () =>{
    const val = parseInt(document.getElementById("number").value)
    const fatResult = fibonacci(val);
    const output  = document.getElementById("result");

    output.innerHTML = `O Sequência de fibonacci correspondente a posição ${val} é ${fatResult}`
}

const fibonacci = (value) => {
    if (value === 1) return 1
    if (value === 2) return 1
    return fibonacci(value - 1) + fibonacci(value - 2)
}