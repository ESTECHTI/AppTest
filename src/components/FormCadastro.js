import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, modificaNome, cadastraUsuario } from '../actions/AutenticacaoActions';

class formCadastro extends Component {

    _cadastraUsuario(){

        const { nome, email, senha } = this.props;

        this.props.cadastraUsuario({ nome, email, senha });
    }

    render(){
        return(
            <View style={{ flex: 1, padding: 10, backgroundColor: '#fff' }}>
                <View style={{ flex: 4, justifyContent: 'center' }}>
                    <TextInput value={this.props.nome} placeholder="Nome" placeholderTextColor='#d82222' style={{ fontSize: 20, height: 45, color: '#d82222'  }} onChangeText={texto => this.props.modificaNome(texto)}/>
                    <TextInput value={this.props.email} placeholder="E-mail" placeholderTextColor='#d82222' style={{ fontSize: 20, height: 45, color: '#d82222'  }} onChangeText={texto => this.props.modificaEmail(texto)}/>
                    <TextInput secureTextEntry value={this.props.senha} placeholder="Senha" placeholderTextColor='#d82222' style={{ fontSize: 20, height: 45, color: '#d82222'  }} onChangeText={texto => this.props.modificaSenha(texto)}/>
                    <Text style={{ color: '#e29802', fontSize: 18 }}>{this.props.erroCadastro}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{ backgroundColor: "#ff0000", justifyContent: 'center', height: 40 }} onPress={() => this._cadastraUsuario()}>
                        <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center' }}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
 }

 const mapStateToProps = state => {
     return(
     {
         nome: state.AutenticacaoReducer.nome,
         email: state.AutenticacaoReducer.email,
         senha: state.AutenticacaoReducer.senha,
         erroCadastro: state.AutenticacaoReducer.erroCadastro,
     }
  );
}

 export default connect(mapStateToProps, {modificaEmail, modificaSenha, modificaNome, cadastraUsuario})(formCadastro);