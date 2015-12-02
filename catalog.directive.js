angular.module("catalog").directive("catalogdetails", catalogDetails);

function catalogDetails() {

var directive = {};

    directive.restrict = 'E';

    directive.templateUrl = 'catalogtemplate.html';

    directive.scope = {
        catalogname : "@"
    }
    
    directive.link = function (scope, element) {        
      scope.catalogJson = JSON.parse(scope.catalogname);    
      scope.title = scope.catalogJson.title;
      scope.price = scope.catalogJson.price;  
      scope.desc = scope.catalogJson.itemdesc;
      scope.image= scope.catalogJson.image;    
    }
    

    return directive;

};