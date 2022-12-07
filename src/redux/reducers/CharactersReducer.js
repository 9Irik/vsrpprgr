import { characterTypes } from "../actions/ActionTypes";

const initialState = {
    characters: [
        {id: 0, firstName: "Antonio", lastName: "Banderos", email: "banderos@mail.com"},
        {id: 1, firstName: "John", lastName: "Wick", email: "wick@gmail.com"},
        {id: 2, firstName: "Antonio", lastName: "Banderos", email: "banderos@gmail.com"},
        {id: 3, firstName: "Hoolio", lastName: "Alpacho", email: "alpacho@yahoo.com"},
        {id: 4, firstName: "Antonio", lastName: "Banderos", email: "banderos@mail.ru"},
        {id: 5, firstName: "Bubble", lastName: "Gum", email: "gum@mail.com"},
        {id: 6, firstName: "Thomas", lastName: "Shelby", email: "shelby@vstu.by"},
        {id: 7, firstName: "Walter", lastName: "White", email: "white@mail.com"},
        {id: 8, firstName: "Jessy", lastName: "Pinkman", email: "pinkman@yahoo.com"},
        {id: 9, firstName: "Doctor", lastName: "Haus", email: "haus@amazon.com"},
        {id: 10, firstName: "Mister", lastName: "Robot", email: "mr.robot@mail.ru"},
        {id: 11, firstName: "Antonio", lastName: "Banderos", email: "banderos@gmail.com"},
    ]
}

export const CharactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case characterTypes.ADD_CHARACTER:
            return {...state, characters: [...state.characters, action.payload]}

        case characterTypes.REMOVE_CHARACTER:
            return {...state, characters: state.characters.filter((character) => character.id !== action.payload)}

        default:
            return state;
    }
}