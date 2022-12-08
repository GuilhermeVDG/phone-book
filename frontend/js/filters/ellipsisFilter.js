angular.module("phoneBook").filter("ellipsis", () => {
  return (input, size) => {
    if(input.length <= size) return input;
    return `${input.substring(0, size || 8)}...`;
  };
});