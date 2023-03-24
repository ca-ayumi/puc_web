import React  from 'react';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      titulo: 'Login',
      email: '',
      senha: '',
      mensagem: ''
    }

    this.validator = this.validator.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSenhaChange = this.handleSenhaChange.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleSenhaChange(event) {
    this.setState({senha: event.target.value});
  }

  validator(){
    if(this.state.email === 'eduardo.lino@pucpr.br' && this.state.senha === '123456'){
      this.setState({mensagem: 'Acessado com sucesso!'});
    } else {
      this.setState({mensagem: 'Usuário ou senha incorretos!'});
    }
  }

  render () {
    return (
      <div className="container" >
        <h1>{this.state.titulo}</h1>
        <input type="text" value={this.state.email} onChange={this.handleEmailChange} /><br />
				<input type="password" value={this.state.senha} onChange={this.handleSenhaChange} /><br />
        <button onClick={this.validator}>Acessar</button> <br /><br />
        <label>{this.state.mensagem}</label>
      </div>
    )
  }

}

export default App;