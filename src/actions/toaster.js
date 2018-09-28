import React from 'react';
import { toast } from 'react-toastify';
import FontAwesomeIcon from 'react-fontawesome'

export function productAdded (item) { 
    toast(<span><FontAwesomeIcon style={{color: 'white'}} name='shopping-basket'/>Tuote lisätty ostoskoriin!</span>, {type: 'info', hideProgressBar: true});
}

export function productUpdated (products) { 
    toast(<span><FontAwesomeIcon style={{color: 'white'}} name='shopping-basket'/>Ostoskori päivitetty!</span>, {type: 'warning', hideProgressBar: true});
}

export function shoppingbasketReseted () { 
    toast(<span><FontAwesomeIcon style={{color: 'white'}} name='shopping-basket'/>Ostoskori tyhjennetty</span>, {type: 'error', hideProgressBar: true});
}