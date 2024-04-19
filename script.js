function converter(){
    let num = document.getElementById('idvalor').value//convertendo o num para tipo number
    let ini = document.getElementById('idinicial').value
    let fim = document.getElementById('idfinal').value
    let res = document.getElementById('resultado')
    
    /*taxas das moedascom o dólar como referência,
    essas taxas foram feitas baseadas na data de 19/04/2024 */
    const taxaUSD = 1.0 //1 dlar
    const taxaBRL = 5.20 //1 dólar = 5,24 reais
    const taxaEUR = 0.94 //1 dólar = 0,94 euros
    const taxaGBP = 0.81 //1 dólar = 0,80 libras esterlina(libra do reino unido)

    if(num.length==0){
        window.alert ("ERRO! insira um valor para converter")
    //se o campo de valor estiver vazio, vai imprimir essa mensagem
    }

    let valorConvertido
    if(ini === 'USD'){
        // Convertendo de USD para outra moeda
        if (fim === 'BRL') {
            valorConvertido = num * taxaBRL;
        } else if (fim === 'EUR') {
            valorConvertido = num * taxaEUR;
        } else if (fim === 'GBP') {
            valorConvertido = num * taxaGBP;
        } else {
            valorConvertido = num; 
        }
     }else if (ini === 'BRL') {
            // Convertendo de BRL para outra moeda
            if (fim === 'USD') {
                valorConvertido = num * taxaBRL;
            } else if (fim === 'EUR') {
                valorConvertido = (num / taxaBRL) * taxaEUR;
            } else if (fim === 'GBP') {
                valorConvertido = (num / taxaBRL) * taxaGBP;
            } else {
                valorConvertido = num; 
            }
        } else if (ini === 'EUR') {
            // Convertendo de EUR para outra moeda
            if (fim === 'USD') {
                valorConvertido = num * taxaEUR;
            } else if (fim === 'BRL') {
                valorConvertido = (num / taxaEUR) * taxaBRL;
            } else if (fim === 'GBP') {
                valorConvertido = (num / taxaEUR) * taxaGBP;
            } else {
                valorConvertido = num; 
            }
        } else if (ini === 'GBP') {
            // Convertendo de GBP para outra moeda
            if (fim === 'USD') {
                valorConvertido = num * taxaGBP;
            } else if (fim === 'BRL') {
                valorConvertido = (num / taxaGBP) * taxaBRL;
            } else if (fim === 'EUR') {
                valorConvertido = (num / taxaGBP) * taxaEUR;
            } else {
                valorConvertido = num; 
            }
        }

        res.innerHTML = `${num} ${ini} = ${valorConvertido.toFixed(2)} ${fim}`

    }
    
