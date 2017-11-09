// @flow
import * as CryptoJS from 'crypto-js';
import $ from 'jquery';
import {API_PRIVATE, API_PUBLIC} from '../../private'

export const LOAD = 'HERO_LOAD';
export const REMOVE = 'HERO_REMOVE';

let hero_amount = 0;
let hero_step = 5;

type Hero = {
    id: number,
    name: string,
    //description: string,
    //modified: string,
    //resourceURI: string
    //other stuff for later
};

//fix async
function getMarvelCharacters() {
    const url = 'http://gateway.marvel.com:80/v1/public/characters';
    const ts = new Date().getTime();
    const hash = CryptoJS.MD5(ts + API_PRIVATE + API_PUBLIC).toString();

    console.log(url);
    $.getJSON(url, {
        ts: ts,
        apikey: API_PUBLIC,
        hash: hash,
    })
        .done(function (data) {
            const h = data["data"]["results"];
            h.forEach((hero) => {
                heroes.push({id:hero["id"], name:hero["name"]});
            });
            console.log(heroes);
        })
        .fail(function (err) {
            console.log(err);
        });
}

const heroes:Array<Hero> = [];
getMarvelCharacters();

const hero = (state: Array<Hero> = [], action: Object): Array<Hero> => {
    switch (action.type) {
        case LOAD:
            return [...state, heroes[hero_amount++]];
        case REMOVE:
            return state.filter(h => h.id !== action.id);
        default:
            return state;
    }
};

export default hero;