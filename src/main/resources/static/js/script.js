$(document).ready(function () {

    function carregarMeusModelos() {
        alert("Script funcionou!");
        $.ajax({
            url: '/js/dados.json',
            method: 'GET',
            contentType: "application/json",
            success: function (data) {
                $('#tblModelos tbody').empty();

                for (let i = 0; i < data.length; i++) {
                    let modelos = data[i];

                    let id = modelos.id;

                    let imagem = $('<img>').attr('src', modelos.imagem).css({
                        'width': '166px',
                        'height': '163px'
                    });

                    let linhaImagem = $('<td>').append(imagem);

                    let ambiente = $('<td>').text("Sem dados");

                    let modelo = $('<td>').text(modelos.modelo);

                    let capacidade = $('<td>').text(modelos.capacidade);

                    let tr = $('<tr>').attr('data-id', id).append(linhaImagem).append(modelo).append(ambiente).append(capacidade);

                    $('#tblModelos tbody').append(tr);

                    alert("Modelos carregados com sucesso");
                }
            },
            error: function () {
                alert('Não foi possível carregar os modelos');
            }
        });
    }

    $('#btnCalcular').click(function () {
        let comprimento = $('#txtComprimento').val();

        let largura = $('#txtLargura').val();

        let total = comprimento * largura;

        if (total <= 9) {
            $('#spnResultado').text("9000");
        } else if (total <= 12) {
            $('#spnResultado').text("12000");
        } else if (total <= 18) {
            $('#spnResultado').text("18000");
        } else if (total <= 24) {
            $('#spnResultado').text("24000");
        } else if (total <= 30) {
            $('#spnResultado').text("30000");
        } else if (total <= 36) {
            $('#spnResultado').text("36000");
        } else if (total > 36 && total < 60) {
            $('#spnResultado').text(total + "000");
        } else if (total >= 60) {
            $('#spnResultado').text(total + "000");
        } else {
            alert("Operação inválida");
        }

        alert($('#spnResultado').text());

        carregarModelos($('#spnResultado').text());
    });

    function carregarModelos(btus) {
        $.ajax({
            url: '/js/dados.json',
            method: 'GET',
            contentType: 'application/json',
            success: function (data) {

                alert("Modelos carregados com sucesso");

                $('#listarModelos').empty();

                let row = $('<div>', {class: 'row mb-2'});
                
                for (let i = 0; i < data.length; i++) {

                    let modelos = data[i];

                    if (modelos.capacidade == btus) {
                        alert(modelos.modelo);
                        
                        let linkImagem = $('<a>', {
                            href: '/modelo'
                        });
                        
                        let imagem = $('<img>').attr('src', modelos.imagem).css({
                            'width': '324px',
                            'height': '283px'
                        });
                        
                        linkImagem.append(imagem);
                        
                        let modelo = $('<p>').text(modelos.modelo);

                        let col1 = $('<div>', {class: 'col-sm-4 mb-2'}).css({
                            'text-align': 'center'
                        });

                        col1.append(linkImagem).append(modelo);

                        row.append(col1);
                    }
                }

                $('#listarModelos').append(row);
            },
            error: function () {
                alert("Não foi possível carregar os modelos");
            }
        });
    }
    
    $('#btnIndex').click(function(){
        window.location.href= '/calculo-btus';
    });
});