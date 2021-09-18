//the same order as displayed
export const tags = {
  fruitful: 'frutífera',
  edible: 'comestível',
  ornamental: 'ornamental',
  medicinal: 'medicinal',
  shade: 'de sombra',
  half_shade: 'meia sombra',
  full_sun: 'sol pleno',
};

export const tagsList = Object.entries(tags).map(entry => ({
  key: entry[0],
  label: entry[1],
}));
