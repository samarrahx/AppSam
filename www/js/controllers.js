angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {


        // Form data for the reg modal
        $scope.registrationData = {};

        // Form data for the login modal
        $scope.loginData = {};

        // Login modal
        $ionicModal.fromTemplateUrl('templates/logindetail.html', {
            id: '1',
            scope: $scope
        }).then(function (modal) {
            $scope.oModal1 = modal;
        });
        // Registration modal
        $ionicModal.fromTemplateUrl('templates/registration.html', {
            id: '2',
            scope: $scope
        }).then(function (modal) {
            $scope.oModal2 = modal;
        });

        //open modal
        $scope.openModal = function (index) {
            if (index == 1) $scope.oModal1.show();
            else $scope.oModal2.show();
                   };

        //close modal
        $scope.closeModal = function (index) {
            if (index == 1) $scope.oModal1.hide();
            else  $scope.oModal2.hide();
           
        };


        // Perform the reg action when the user submits the reg form
        $scope.doRegistration = function () {
            console.log('Registering...', $scope.loginData);

            // Perform the login action when the user submits the login form
            $scope.doLogin = function () {
                console.log('Logging on...', $scope.loginData);

            }
        }
    }
      
        
        )