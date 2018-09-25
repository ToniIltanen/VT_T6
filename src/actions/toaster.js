import React from 'react';
import { toast } from 'react-toastify';
import FontAwesomeIcon from 'react-fontawesome'

export function productAdded (item) { 
    toast(<span><FontAwesomeIcon style={{color: 'white'}} name='shopping-basket'/>Tuote lisätty ostoskoriin!</span>, {type: 'info', hideProgressBar: true});
}

export function shoppingbasketReseted () { 
    toast(<span><FontAwesomeIcon style={{color: 'white'}} name='shopping-basket'/>Ostoskori tyhjennetty</span>, {type: 'error', hideProgressBar: true});
}