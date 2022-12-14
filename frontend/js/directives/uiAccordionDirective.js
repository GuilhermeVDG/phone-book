angular.module("phoneBook").directive("uiAccordions", () => {
  return {
    controller: function ($scope, $element, $attrs){
      const accordions = [];

      this.registerAccordion = accordion => accordions.push(accordion);

      this.closeAll = () => accordions.forEach(accordion => {
        accordion.isOpened = false;
      });
    }
  };
});

angular.module("phoneBook").directive("uiAccordion", () => {
  return {
    templateUrl: 'view/accordion.html',
    transclude: true,
    scope: {
      title: '@'
    },
    require: "^uiAccordions",
    link: (scope, element, attributes, ctrl) => {
      ctrl.registerAccordion(scope);
      scope.open = () => {
        ctrl.closeAll();
        scope.isOpened = true;
      };
    }
  };
});