import {TextScreen} from 'common/TextScreen';
import React from 'react';

export function NotFound() {
  return (
    <TextScreen
      title="Nenhum resultado encontrado"
      description="Você pode tentar outras palavras ou filtros"
    />
  );
}
