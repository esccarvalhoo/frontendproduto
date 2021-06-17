import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 
export default class produto extends Component {
    state = {
        produto: {},
    };
 
    componentDidMount() {
        const { id } = this.props.match.params;
 
        fetch(`http://localhost:3004/produto/${id}`)
            .then(produto =>
                produto.json().then(produto => this.setState({ produto }))
            )
            .catch(erro => this.setState({ erro }));
    }
 
    render() {
        const { produto, index } = this.state;
 
        return (
            <div className="produto-info">
                <h1> {produto.nome} </h1>
                <h1> {produto.descricao} </h1>
                <h1> {produto.preco} </h1>
                <h1> {produto.qtdEstoque} </h1>
                <br />
                <Link to={`/produtos`}> Voltar </Link> <br />
                <Link to={`/editarProduto/${produto.id}`}> Editar </Link> <br />
                <Link to={`/deletarProduto/${produto.id}`}> Deletar </Link> <br />
            </div >
        );
    }
}