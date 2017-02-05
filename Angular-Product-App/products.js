angular.module("products", [])
    .controller("productCtrl", function($scope){

        $scope.productsList = [
            {
                id: 1,
                name: "Kettle",
                description: "Steel Electric Kettle",
                category: "Kitchen",
                stock: 100,
                price: 55.00},
            {
                id: 2,
                name: "Fridge freezer",
                description: "Fridge + freezer large",
                category: "kitchen",
                stock: 45,
                price: 799.00},
            {
                id: 3,
                name: "Portable Music Player",
                description: "250GB music player (MP3, MP4, WMA, WAV)",
                category: "Audio",
                stock: 5,
                price: 99.00},
            {
                id: 4,
                name: "13inch Laptop",
                description: "HP laptop, 8GB RAM, 250GB SSD",
                category: "Computer",
                stock: 45,
                price: 799.00},
            {
                id: 5,
                name: "8inch Tablet",
                description: "Android 5.1 Tablet, 32GB storage, 8inch screen",
                category: "Computer",
                stock: 5,
                price: 99.00},
            {
                id: 6,
                name: "46inch TV",
                description: "Sony 4K, OLED, Smart TV",
                category: "Television",
                stock: 12,
                price: 2799.00},
            {
                id: 7,
                name: "Washing Machine",
                description: "1600rpm spin, A+++ rated, 10KG",
                category: "Laundry",
                stock: 50,
                price: 699.00},
            {
                id: 8,
                name: "Phone",
                description: "Windows 10, 5.2inch OLED, 3GB RAM, 64GB Storage",
                category: "Mobile Phone",
                stock: 45,
                price: 799.00},
            {
                id: 9,
                name: "10inch Tablet",
                description: "Windows 10, 128GB storage, 8inch screen",
                category: "Computer",
                stock: 5,
                price: 299.00},
            {
                id: 10,
                name: "Oven",
                description: "Oven + Grill, Stainless Steel",
                category: "Kitchen",
                stock: 10,
                price: 399.00},
            {
                id: 11,
                name: "Bed",
                description: "Super King size, super comfort mattress",
                category: "Furniture",
                stock: 5,
                price: 899.00},
            {
                id: 12,
                name: "Learning JavaScript",
                description: "Become a JavaScript expert in 2 hours!",
                category: "Book",
                stock: 50,
                price: 29.00}
        ];

         /*
         * The list of categories are placed in an array called categoryList.
         * They can be accessed later through ng-select which places each
         * category into a list.
         */
        $scope.categoryList = [
            {
                categoryName:"Audio"},
            {
                categoryName:"Books"},
            {
                categoryName:"Computer"},
            {
                categoryName:"Furniture"},
            {
                categoryName:"Kitchen"},
            {
                categoryName:"Laundry"},
            {
                categoryName:"Mobile Phone"},
            {
                categoryName:"Television"}

        ];
        
        $scope.newProduct = {};
        $scope.existingProduct = {};
        // comment here
        $scope.newCategory = {};


        $scope.addProduct = function(){
            var pIndex = $scope.productsList.length + 1;
            $scope.newProduct.id = pIndex;
            $scope.productsList.push($scope.newProduct);
            $scope.reset();
        }

        $scope.addProductCategory = function(){
            
             /* 
             * generates the index by getting the total count of categories in list and
             * increments by 1 
             */
             
            var pIndex = $scope.categoryList.length + 1;
            /*
            * The next three lines function as:
            * set the category id
            * push the new category to the list
            * set input form to blank
            */
            $scope.newCategory.id = pIndex;
            $scope.categoryList.push($scope.newCategory);
            $scope.reset();
        }

        $scope.editProduct = function (p) {
            $scope.existingProduct = angular.copy(p);
        }

        $scope.deleteProduct = function(product){
            if (confirm("Are you sure you want to delete product: " + product.id + "?")) {
                var index = $scope.productsList.indexOf(product);
                $scope.productsList.splice(index, 1);
            }
        }

        $scope.updateProduct = function(p){

            if (confirm("Are you sure you want to save changes to: " + p.name + "?")) {
                var index = $scope.productsList.indexOf(p);
                $scope.productsList[index] = angular.copy($scope.existingProduct);
            }
            $scope.reset();
        }
        
        $scope.reset = function () {
            $scope.newProduct = {};
            $scope.existingProduct = {};
            $scope.newCategory = {};
            // Added the reset for newCategory form.
        }
    });
