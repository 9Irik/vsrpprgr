import React, { useContext } from 'react';
import CharactersTable from '../components/CharactersTable/CharactersTable';
import CharactersDiagram from '../components/Diagram/CharactersDiagram';
import PostCharacter from '../components/PostCharacter/PostCharacter';
import { AuthContext } from '../context';

function Characters() {
    const { setIsAuth } = useContext(AuthContext);

    return (
        <div className="container">
            <div className="curUser">
                <div>Hello, <b>{localStorage.getItem("username")}!</b></div>
                <button onClick={() => {
                    localStorage.removeItem("auth");
                    setIsAuth(false);
                }}>Log out</button>
            </div>
            <PostCharacter />
            <h3>Characters</h3>
            <hr />
            <CharactersDiagram />
            <CharactersTable />
        </div>
    );
}

export default Characters;