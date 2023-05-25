import React from 'react';

export const Item = (props) => {

  return <>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <img src={props.item.image} alt={props.item.title} style={{ width: '50%', maxWidth: '400px', margin: '20px', border: '5px solid black' }} />
      <div>
        <h3 style={{ fontSize: '40px', fontWeight: 'bold', margin: '10px' }}>{props.item.title}</h3>
        <p style={{ fontSize: '25px', margin: '5px' }}>{props.item.category}</p>
        <p style={{ fontSize: '25px', margin: '5px' }}>{props.item.description}</p>
        <p style={{ fontSize: '30px', margin: '5px' }}>£{props.item.price}</p>
      </div>
    </div>
  </>
} 
	