$(document).ready(function () {

    carregarMeusModelos();
    //Salva o modelo selecionado na lista na controller e direciona para a listagem de modelos
    function salvarMeusModelos(modelo) {
        $.ajax({
            url: 'http://localhost:8080/modelos/adicionar-meus-modelos',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                modelo: modelo.modelo,
                capacidade: modelo.capacidade,
                ambiente: modelo.ambiente,
                urlImagem: modelo.urlImagem
            }),
            success: function (data) {
                carregarMeusModelos();
                window.location.href = "/listagem-modelos";
            },
            error: function (err) {
                alert('Não foi possível carregar os modelos');
                console.log(err);
            }
        });
    }

    //Calcula a quantidade de btus necessárias para o ambiente
    $('#btnCalcular').click(function () {

        let comprimento = $('#txtComprimento').val();

        let largura = $('#txtLargura').val();

        if (!comprimento || !largura) {
            alert("Preencha todos os campos");
        } else if (comprimento < 0 || largura < 0) {
            alert("Insira um valor maior que 0");
        } else {
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

            carregarModelos($('#spnResultado').text());
        }
    });

    //Carrega os modelos do JSON de acordo com o resultado de btus calculados
    function carregarModelos(btus) {
        $.ajax({
            url: '/js/dados.json',
            method: 'GET',
            contentType: 'application/json',
            success: function (data) {

                $('#listarModelos').empty();

                let row = $('<div>', {class: 'row mb-2'});

                for (let i = 0; i < data.length; i++) {

                    let modelos = data[i];

                    //Se o resultado o btus recebido for maior ou igual 60000 btus será exibido um modelo de 60.000 BTUS
                    if (btus >= 60000 || btus > 36000 && btus < 60000) {
                        if (modelos.capacidade >= 60000) {
                            let linkImagem = $('<a>', {
                                click: function () {

                                    let ambiente = $('#txtComprimento').val() + "X" + $('#txtLargura').val();

                                    modelos.ambiente = ambiente;

                                    let modeloEscolhido = {
                                        id: modelos.id,
                                        modelo: modelos.modelo,
                                        capacidade: modelos.capacidade,
                                        resumo: modelos.resumo,
                                        titulo_car_1: modelos.titulo_car_1,
                                        caracteristica_1: modelos.caracteristica_1,
                                        titulo_car_2: modelos.titulo_car_2,
                                        caracteristica_2: modelos.caracteristica_2,
                                        titulo_car_3: modelos.titulo_car_3,
                                        caracteristica_3: modelos.caracteristica_3,
                                        urlImagem: modelos.urlImagem,
                                        url_imagem_car_1: modelos.url_imagem_car_1,
                                        url_imagem_car_2: modelos.url_imagem_car_2,
                                        url_imagem_car_3: modelos.url_imagem_car_3,
                                        ambiente: modelos.ambiente
                                    };
                                    carregarModelosJSON(modeloEscolhido);
                                }
                            });

                            let imagem = $('<img>').attr('src', modelos.urlImagem).css({
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
                    } else {

                        if (modelos.capacidade == btus) {

                            let linkImagem = $('<a>', {
                                click: function () {

                                    let ambiente = $('#txtComprimento').val() + "X" + $('#txtLargura').val();

                                    modelos.ambiente = ambiente;

                                    let modeloEscolhido = {
                                        id: modelos.id,
                                        modelo: modelos.modelo,
                                        capacidade: modelos.capacidade,
                                        resumo: modelos.resumo,
                                        titulo_car_1: modelos.titulo_car_1,
                                        caracteristica_1: modelos.caracteristica_1,
                                        titulo_car_2: modelos.titulo_car_2,
                                        caracteristica_2: modelos.caracteristica_2,
                                        titulo_car_3: modelos.titulo_car_3,
                                        caracteristica_3: modelos.caracteristica_3,
                                        urlImagem: modelos.urlImagem,
                                        url_imagem_car_1: modelos.url_imagem_car_1,
                                        url_imagem_car_2: modelos.url_imagem_car_2,
                                        url_imagem_car_3: modelos.url_imagem_car_3,
                                        ambiente: modelos.ambiente
                                    };
                                    carregarModelosJSON(modeloEscolhido);
                                }
                            });

                            let imagem = $('<img>').attr('src', modelos.urlImagem).css({
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
                }
            },
            error: function () {
                alert("Não foi possível carregar os modelos");
            }
        });
    }

    //Abrir tela de calcular btus
    $('#btnIndex').click(function () {
        window.location.href = '/calculo-btus';
    });

    //Pega todos os modelos do JSON e adiciona na lista na controller. Depois abre o modelo selecionado de acordo com o id do modelo passado
    function carregarModelosJSON(modelo) {
        $.ajax({
            url: '/adicionar-modelos',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                id: modelo.id,
                modelo: modelo.modelo,
                capacidade: modelo.capacidade,
                resumo: modelo.resumo,
                titulo_car_1: modelo.titulo_car_1,
                caracteristica_1: modelo.caracteristica_1,
                titulo_car_2: modelo.titulo_car_2,
                caracteristica_2: modelo.caracteristica_2,
                titulo_car_3: modelo.titulo_car_3,
                caracteristica_3: modelo.caracteristica_3,
                urlImagem: modelo.urlImagem,
                url_imagem_car_1: modelo.url_imagem_car_1,
                url_imagem_car_2: modelo.url_imagem_car_2,
                url_imagem_car_3: modelo.url_imagem_car_3,
                ambiente: modelo.ambiente
            }),
            success: function (data) {
                window.location.href = "/abrir-modelo?id=" + modelo.id;
            },
            error: function (err) {
                console.log(err);
                alert("Não foi possível salvar os dados");
            }
        });
    }

    //Pega os dados do modelo selecionado e envia para função salvarMeusModelos
    $('#btnSalvarModelo').click(function () {

        let id = $('#txtId').val();

        let modelo = $('#txtModelo').val();

        let ambiente = $('#txtAmbiente').val();

        let capacidade = $('#txtCapacidade').val();

        let urlImagem = $('#txtUrlImagem').val();

        let modeloSelecionado = {
            modelo: modelo,
            ambiente: ambiente,
            capacidade: capacidade,
            urlImagem: urlImagem
        };

        salvarMeusModelos(modeloSelecionado);
    });


    function carregarMeusModelos() {
        $.ajax({
            url: 'http://localhost:8080/modelos/listar-meus-modelos',
            method: 'GET',
            success: function (data) {
                alert("Dados carregados com sucesso");

                $('#tblModelos tbody').empty();

                for (let i = 0; i < data.length; i++) {
                    let meuModelo = data[i];
                    
                    alert(meuModelo.id);
                    
                    let id = $('<td>').text(meuModelo.id);

                    let baseUrl = 'http://localhost:8080';

                    let urlCompleta = baseUrl + meuModelo.urlImagem;

                    let modelo = $('<td>').text(meuModelo.modelo);

                    let capacidade = $('<td>').text(meuModelo.capacidade);

                    let ambiente = $('<td>').text(meuModelo.ambiente);

                    let img = $('<img>', {
                        src: urlCompleta
                    }).css({
                        width: '166px',
                        height: '163px'
                    });
                    
                    let imagem = $('<td>').append(img);
                    
                    let tr = $('<tr>').attr('data-id', meuModelo.id).append(imagem).append(modelo).append(ambiente).append(capacidade);
                    
                    $('#tblModelos tbody').append(tr);
                }
            },
            error: function () {
                alert("Não foi possível carregar os seus modelos salvos");
            }
        });
    }
});