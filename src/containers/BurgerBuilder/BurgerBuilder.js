import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            salad : 0,
            cheese : 0,
            meat : 0,
            bacon : 0
        }
    }

    render(){
        return (
            <Aux>
                <Burger ingredientProps={this.state.ingredients}/>
                <p>Builder Controls</p>
            </Aux>
        );
    }
}

export default BurgerBuilder;