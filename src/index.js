import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ShoppingList extends React.Component {
  render(){
    return (
      <div class="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
          <li>Wechat</li>
        </ul>
      </div>
    )
  }
} 

ReactDOM.render(<ShoppingList name="Mark"></ShoppingList>, document.getElementById('root'));
