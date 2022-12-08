angular.module("phoneBook").config(function (serialGeneratorProvider) {
  console.log(serialGeneratorProvider.getLength());
  serialGeneratorProvider.setLength(20);
});