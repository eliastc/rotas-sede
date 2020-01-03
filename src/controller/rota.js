const Rota = require("../model/rota");
const status = require('http-status');

exports.buscarUm = (request, response, next) => {
    const id = request.params.id;

    Rota.findById(id)
    .then(rota => {
        if (rota){
            response.status(status.OK).send(rota);
        } else {
            response.status(status.NOT_FOUND).send();
        }        
    })
    .catch(error =>next(error));
};

exports.buscarTodos = (request, response, next) => {
    let limite = parseInt(request.query.limite || 0);
    let pagina = parseInt(request.query.pagina || 0);

    if(!Number.isInteger(limite) || !Number.isInteger(pagina)) {
        response.status(status.BAD_REQUEST).send();
    }

    const ITENS_POR_PAGINA = 10;

    limite = limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite;
    pagina = pagina <= 0 ? 0 : pagina * limite;

    Rota.findAll({ limit: limite, offset: pagina})
        .then(rotas => {
            response.send(rotas);
        })
        .catch(error  => next(error));
};

exports.criar = (request, response, next) => {
    const motorista = request.body.motorista;
    const intinerario = request.body.intinerario;
    const postoIda = request.body.postoIda;
    const postoVolta = request.body.postoVolta;
    const combustivel = request.body.combustivel;
    const litros = request.body.litros;
    const quilometragemInicial = request.body.quilometragemInicial;
    const quilometragemAbastecer = request.body.quilometragemAbastecer;
    const quilometragemFinal = request.body.quilometragemFinal;
    const cidade = request.body.cidade;
    const data = request.body.data;
    const placa = request.body.placa;

    Rota.create({
        motorista: motorista,
        intinerario: intinerario,
        postoIda: postoIda,
        postoVolta: postoVolta,
        combustivel: combustivel,
        litros: litros,
        quilometragemInicial: quilometragemInicial,
        quilometragemAbastecer: quilometragemAbastecer,
        quilometragemFinal: quilometragemFinal,
        cidade: cidade,
        data: data,
        placa: placa
    }).then(() => {
        response.status(status.CREATED).send();
    }).catch((error) =>next(error));
};

exports.atualizar = (request, response, next) => {
    const id = request.params.id;

    const motorista = request.body.motorista;
    const intinerario = request.body.intinerario;
    const postoIda = request.body.postoIda;
    const postoVolta = request.body.postoVolta;
    const combustivel = request.body.combustivel;
    const litros = request.body.litros;
    const quilometragemInicial = request.body.quilometragemInicial;
    const quilometragemAbastecer = request.body.quilometragemAbastecer;
    const quilometragemFinal = request.body.quilometragemFinal;
    const cidade = request.body.cidade;
    const data = request.body.data;
    const placa = request.body.placa;

    Rota.findById(id)
        .then(rota=> {
            if (rota) {
                Rota.update(
                    {
                        motorista: motorista,
                        intinerario: intinerario,
                        postoIda: postoIda,
                        postoVolta: postoVolta,
                        combustivel: combustivel,
                        litros: litros,
                        quilometragemInicial: quilometragemInicial,
                        quilometragemAbastecer: quilometragemAbastecer,
                        quilometragemFinal: quilometragemFinal,
                        cidade: cidade,
                        data: data,
                        placa: placa
                    },
                    { where: { id: id }
                })
                .then(() => {
                        response.status(status.OK).send();
                    })
                    .catch(error => next(error));
            } else {
                response.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));    
};

exports.excluir = (request, response, next) => {
    const id = request.params.id;

    Rota.findById(id)
        .then(rota => {
            if (rota) {
                Rota.destroy({
                    where: { id: id }
                })
                .then(() => {
                    response.status(status.OK).send();
                })
                .catch(error => next(error));
            } else {
                response.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};