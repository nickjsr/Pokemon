export const formatString = (value) => {
  // Your implementation of reformatString
  return value
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};