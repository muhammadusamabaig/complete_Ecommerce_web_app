import React, { Component } from 'react'
import {ProductConsumer} from './Contaxt';
import Title from './Title';
import Productcard from './Productcard';
 class Productlist extends Component {

    info={
        name:"usama",
        fname:"irfan"
    }
    render() {
        return (
            <div>
            <Title head1="Our" head2="Products" />
                <ProductConsumer>
                    {
                        (value)=>
                            {
                            return(
                                
                                <div>
                                    {console.log(value.product)}
                   <Productcard productscard={value.product}/>
                                </div>
                            )
                        }

                    }
                </ProductConsumer>
            </div>
        )
    }
}
export default Productlist