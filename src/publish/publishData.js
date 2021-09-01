export const publishData = {
  options: [
    {key: 'tag_fruitful', label: 'frutífera', type: 'boolean'},
    {key: 'tag_edible', label: 'comestível', type: 'boolean'},
    {key: 'tag_ornamental', label: 'ornamental', type: 'boolean'},
    {key: 'tag_medicinal', label: 'medicinal', type: 'boolean'},
    {key: 'tag_shade', label: 'de sombra', type: 'boolean'},
    {key: 'tag_half_shade', label: 'meia sombra', type: 'boolean'},
    {key: 'tag_full_sun', label: 'sol pleno', type: 'boolean'},
  ],
  availabilities: {
    swap: {key: 'swap', label: 'troca', type: 'boolean'},
    sell: {key: 'sell', label: 'venda', type: 'boolean'},
    donate: {key: 'donate', label: 'doação', type: 'boolean'},
  },
  price: {key: 'price', label: 'Preço', type: 'number'},
  name: {key: 'name', label: 'Nome da planta', type: 'string'},
  amount: {key: 'amount', label: 'Quantidade', type: 'number'},
  description: {key: 'description', label: 'Descrição', type: 'string'},
  images: {key: 'images', label: '-images', type: 'object', initialValue: []},
  type: {
    key: 'type',
    label: 'Marcar como',
    type: 'string',
    options: [
      {
        key: 'plant',
        label: 'Muda',
        image: require('../../assets/typeIcons/green/plant.png'),
      },
      {
        key: 'seed',
        label: 'Semente',
        image: require('../../assets/typeIcons/green/seed.png'),
      },
      {
        key: 'clipping',
        label: 'Ramo',
        image: require('../../assets/typeIcons/green/clipping.png'),
      },
      {
        key: 'bulb',
        label: 'Bulbo',
        image: require('../../assets/typeIcons/green/bulb.png'),
      },
    ],
  },
};
