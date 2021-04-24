import React from 'react';
import Form  from './Form.js';
import  ListCards from './ListCard.js'
export default function Content() {
    return (
        <div className="content">
            <Form />
            <ListCards /> 
        </div>
    )
}
