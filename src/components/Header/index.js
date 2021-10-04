import React from 'react';
import Nav from '../../components/Nav'

function Header ({ setPage }){

    return (
        <header className= "MyPicture" >
                <h1 className ="flex-row">
                    <a href="/" onClick={() => setPage("")}> </a>
                    <i>Jessica Kelley</i>
                </h1>
            
            <Nav setPage={setPage}> </Nav>
                
        </header>
    );
}
export default Header;