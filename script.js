function getDadosEnderecoPorCEP(cep) {
    cepFormatado = cep.replace(/[^a-zA-Z0-9]/g, '');

    let url = 'https://viacep.com.br/ws/' + cepFormatado + '/json/unicode/'

    let xmlHttp = new XMLHttpRequest()
    xmlHttp.open('GET', url)

    xmlHttp.onreadystatechange = () => 
    {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            let dadosJsonText = xmlHttp.responseText
            let dadosJsonObj = JSON.parse(dadosJsonText)

            document.getElementById('endereco').value = dadosJsonObj.logradouro
            document.getElementById('bairro').value = dadosJsonObj.bairro
            document.getElementById('cidade').value = dadosJsonObj.localidade
            document.getElementById('uf').value = dadosJsonObj.uf
        }
    }

    xmlHttp.send()
}