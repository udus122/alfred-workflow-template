import alfy from 'alfy';

const createItem = (title: string) => {
  return {
    title,
    icon: {
      type: 'png',
      path: '../assets/icon.png',
    },
  };
};

(async () => {
  const input = alfy.input;
  alfy.output([createItem(input)]);
})();
