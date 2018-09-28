import React,  { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';


class formLogin extends Component {

    _autenticarUsuario() {
        const { email, senha } = this.props;

        this.props.autenticarUsuario({ email, senha });
        this.props.navigation.navigate('Principal')
    }

    render(){
        
        return(
            <View style={{ flex: 1, padding: 10, backgroundColor: '#fff' }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 25, color: '#d82222' }}>TellMe</Text>
                    <Icon name='forum' size={40} color= '#d82222' />
                </View>
                <View style={{ flex: 2 }}>
                    <TextInput value={this.props.email} style={{ fontSize: 20, height: 45, color: '#d82222' }} placeholder="E-mail" placeholderTextColor='#d82222' onChangeText={texto => this.props.modificaEmail(texto)}/>
                    <TextInput secureTextEntry value={this.props.senha} style={{ fontSize: 20, height: 45, color: '#d82222'  }} placeholder="Senha" placeholderTextColor='#d82222' onChangeText={texto => this.props.modificaSenha(texto)}/>
                    <Text style={{ fontSize: 18, color: '#e29802' }}>{this.props.erroLogin}</Text>

                    <TouchableOpacity  onPress={() => Actions.formCadastro()}>
                        <Text style={{ fontSize: 18, color: '#adadad' }}>
                            Ainda não tem cadastro? Cadastra-se! 
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 2 }}>
                    <TouchableOpacity style={{ 
                        backgroundColor:'#ff0000', 
                        height: 40, 
                        justifyContent: 'center', }} 
                        onPress={() => this._autenticarUsuario()}
                        >
                        <Text style={{ alignSelf: 'center', fontSize: 20, color: '#fff' }}>Acessar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin
    }
)

export default connect(mapStateToProps, {modificaEmail, modificaSenha, autenticarUsuario})(formLogin)