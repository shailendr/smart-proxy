var app = angular.module("teamApp", ["ngRoute"]);
var members = [
				{
				 "firstName" : "Shailendra",
				 "lastName"  : "Singh",
				 "email"     : "Shailendra.singh@email.com",
				 "address"   : "Hinjewadi",
				 "city"		 : "Pune",
				 "state"     : "Maharastra",
				 "avatar"	 : "../../assets/images/male.png",
				 "task"		 : "2",
				 "id"		 : "1000124",
				 "status"	 : "Open",
				 "openedOn"  : "23/Aug/2013",
				 "modifieddOn"  : "24/Aug/2013",
				 "discription" : "Backup issue observed using the new app version"
				},
				{
				 "firstName" : "Dev",
				 "lastName"  : "Singh",
				 "email"     : "Dev.singh@email.com",
				 "address"   : "Hinjewadi",
				 "city"		 : "Pune",
				 "state"     : "Maharastra",
				 "avatar"	 : "../../assets/images/male.png",
				 "task"		 : "2",
				 "id"		 : "1000125",
				 "status"	 : "Open",
				 "openedOn"  : "2/Nov/2015",
				 "modifieddOn"  : "21/Nov/2015",
				 "discription" : "Samsung TV is not connected to JBL bluetooth speakers."
				},
				{
				 "firstName" : "Pooja",
				 "lastName"  : "Singh",
				 "email"     : "Pooja.singh@email.com",
				 "address"   : "Hinjewadi",
				 "city"		 : "Pune",
				 "state"     : "Maharastra",
				 "avatar"	 : "../../assets/images/male.png",
				 "task"		 : "2",
				 "id"		 : "1000126",
				 "status"	 : "Open",
				 "openedOn"  : "1/Jan/2016",
				 "modifieddOn"  : "2/Jan/2016",
				 "discription" : "Samsung NOTE 3 Gallary is not sync up to Dropbox."
				}
			];

var users = [{email:'admin@asurion.com', password:'asurion123' }];

/*
	routes
*/
app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl : "directives/login.html",
		controller : "loginCtrl"
	})
	.when("/login",{
		templateUrl : "directives/login.html",
		controller : "loginCtrl"
	})
	.when("/search",{
		templateUrl : "views/team/members.html",
		controller : "teamCtrl"
	})
	.when("/assign",{
		templateUrl : "views/tickets/new.html",
		controller : "assignCtrl"
	})
	.when('/assign/:id/display', {
        templateUrl: "views/tickets/display.html",
        controller: "assignCtrl",
        method: "display"
    });
});

/*
	directive
*/
app.directive("header", function() {
    return {
      restrict : "E",
      templateUrl : "directives/header.html"
    }
});

app.directive("footer", function() {
    return {
      restrict : "C",
      templateUrl : "directives/footer.html"
    }
});

app.directive("login", function() {
    return {
      restrict : "E",
      templateUrl : "directives/login.html"
    }
});

app.directive("task", function() {
    return {
      restrict : "C",
      template : "<p>task need to be implement...</p>"
    }
});

/*
	Controllers
*/
app.controller('teamAppCtrl',function($scope, $rootScope){
    $rootScope.isLogin = false;
    $rootScope.view= "login";
    $rootScope.activeTeam = "";
});

app.controller('assignCtrl',function($scope, $route, $rootScope, $location,$routeParams){
    $scope.newUser = {
    	    "firstName" : "dev",
		    "lastName" : "singh",
		    "email" : "dev@email.com",
		    "address" : "wakad",
		    "city" : "Pune",
		    "state" : "Maharastra",
	    	"avatar"	 : "../../assets/images/male.png",
			"task"		 : "0"	
    };

	$scope.newMember = function(){
		members.push($scope.newUser);
		$rootScope.isLogin = true;
    	$rootScope.activeTeam = "";
		$location.path('/issue');
    };
    $scope.display = function(){
		$scope.ticketId = $routeParams.id;
    };
    $scope.viewTicket = function(id){
    };

    $scope.tab = 1;
    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };

    $scope.ticketDetails = function(ticketID){
    	var data = $scope.members;
        for(var i=0; i < data.length; i++){
            if(data[i].id == ticketID){
				return data[i]
            }            
        }	
    };
    
    $rootScope.activeTeam = "";
	$scope.members = members;

 	$scope.init = function(){
      if ($route.current.method !== undefined) {
        $scope[$route.current.method]();
      }
    };

    $scope.init();
});

app.controller('teamCtrl',function($scope, $rootScope, $location){
    var _this = this;
    $scope.addMember = function(){
    	$rootScope.activeTeam = "active";
    	$location.path('/assign');
    };
    $rootScope.activeTeam = "active";
    $scope.members = members; 


});

app.controller('loginCtrl',function($scope, $rootScope, $location){
	$scope.email="";
	$scope.password="";
    $scope.subLogin = function(){
    	angular.forEach(users, function(value, key) {
		  if(value.email === $scope.email && value.password === $scope.password){
		  	$rootScope.isLogin = true;
		  	$rootScope.activeTeam = "active";
			$location.path('/search');
		  }
		});
    };    
});