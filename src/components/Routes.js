import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './FormLogin';
import FormCadastro from './FormCadastro';
import BoasVindas from './BoasVindas';
import Principal from './Principal';

  export default props => (
      <Router navigationBarStyle={{ backgroundColor: '#d82222'}} titleStyle={{  alignSelf: 'center', color: '#fff' }} backButtonTintColor={{ color: '#fff' }}>
        <Scene key="root">
          <Scene key='formLogin' component={FormLogin} title="Login" hideNavBar={true}/>
          <Scene key='formCadastro' component={FormCadastro} title="Cadastro" hideNavBar={false} />
          <Scene key='boasVindas' component={BoasVindas} title="Bem-Vindo" hideNavBar={false}/>
          <Scene key='principal' component={Principal} title="Principal" hideNavBar={false}/>
          </Scene>
      </Router>
  );
  