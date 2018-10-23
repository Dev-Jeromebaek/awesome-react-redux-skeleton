function getModuleColor() {
  const colors = [
    '#3377FF',
    '#5B94FF',
    '#B156FF',
    '#FF4F54',
    '#3CEBA2',
    '#EB8656',
    '#EB74D0',
    '#0AED19',
    '#343a40',
    '#FF4A52',
    '#FF9C5C',
    '#FFCD0E',
    '#01FF5A',
    '#3061FF',
    '#7831FF',
  ];

  const random = Math.floor(Math.random() * 15);

  return colors[random];
}

module.exports = {
  getModuleColor,
};
