import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonIndexItem = ({ poke }) => {
  const link = `/pokemon/${poke.id}`;
  return (
    <li>
      <Link to={link}>{ poke.name }</Link>
      <img src={poke.imageUrl}></img>
    </li>
  )
};
