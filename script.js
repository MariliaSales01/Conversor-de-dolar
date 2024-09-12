const form = document.getElementById('form')

form.addEventListener('submit', function(event){
    event.preventDefault()

    const valorReal = document.getElementById("real").value;

    const valorConvertido = (valorReal / 5.64).toFixed(2)

    const value = document.getElementById("value")

    document.getElementById('infos').classList.remove('hidden')

    value.textContent =  valorConvertido.replace('.',',')
})


