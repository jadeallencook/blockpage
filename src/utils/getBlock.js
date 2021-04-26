import blocks from '../blocks';

const getBlock = block => {
  const [type, style] = block.split('/');
  return blocks[type][style];
}

export default getBlock