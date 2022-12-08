angular.module("phoneBook").filter("name", () => {
  return input => {
    const names = input.split(' ');
    const namesFormat = names.map(name => `${name.charAt(0).toUpperCase()}${name.substring(1)}`);
    return namesFormat.join(' ');
  };
});