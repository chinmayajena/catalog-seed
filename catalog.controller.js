  


angular.module("catalog").controller("CatalogController", function($scope) {
 
       
        $scope.catalogList = [];
    
    
    
    
        var Arrow = {};
        Arrow.title = "Arrow";
        Arrow.image  = "http://91ef69bade70f992a001-b6054e05bb416c4c4b6f3b0ef3e0f71d.r93.cf3.rackcdn.com/elegant-young-handsome-man-studio-fashion-portrait-100352840.jpg";
        Arrow.price = "$500";
        Arrow.itemdesc = "A unique design made for you!"
    
        var Armani = {};
        Armani.title = "Armani";
        Armani.image  = "http://91ef69bade70f992a001-b6054e05bb416c4c4b6f3b0ef3e0f71d.r93.cf3.rackcdn.com/beautiful-young-female-fashion-model-100275408.jpg";
        Armani.price = "$1200";
        Armani.itemdesc = "Uniquely Crafted"
    
    
        var Zara = {};
        Zara.title = "Zara";
        Zara.image  = "http://91ef69bade70f992a001-b6054e05bb416c4c4b6f3b0ef3e0f71d.r93.cf3.rackcdn.com/asian-woman-portrait-photography-100379813.jpg";
        Zara.price = "$4200";
    
        function init() {
            
            $scope.catalogList.push(Arrow);
            $scope.catalogList.push(Armani);
            $scope.catalogList.push(Zara);

        }
    
        init();
    
        $scope.test = "This is test data";
        
        
        
        
    });


    