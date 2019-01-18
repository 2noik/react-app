var React = require('react');
var ReactDOM = require('react-dom');

class App extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        url: '',
        data: [],
      };

      this.getSmallData = this.getSmallData.bind(this);
      this.getBigData = this.getBigData.bind(this);

    }

    getSmallData(){
      var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'
      fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ data: data }))
      // .then(console.log(this.state.data))
    }

    getBigData(){
      var url = 'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'
      fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ data: data }))
      // .then(console.log(this.state.data))
    }

    render() {
      return (
        <div>
          <h2>Выберите объем данных:</h2>
          <br/>
          <button type="button" className="btn btn-primary" onClick={this.getSmallData}>Маленькие</button>
          <button type="button" className="btn btn-primary" onClick={this.getBigData}>Большие</button>
          <br/>
          <br/>
          <table className="table table-hover">
           <thead>
             <tr scope="col">
               <th>id</th>
               <th>firstName</th>
               <th>lastName</th>
               <th>email</th>
               <th>phone</th>
              </tr>                             
          </thead>
          <tbody>
            {this.state.data.map(item => { return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>);
    }
  }
ReactDOM.render(<App />, document.getElementById('app'));
