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
				 "modifieddOn"  : "24/Aug/2013"
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
				 "modifieddOn"  : "21/Nov/2015"
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
				 "modifieddOn"  : "2/Jan/2016"
				}
			];

var users = [{email:'admin@admin.com', password:'admin123' }];

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
		templateUrl : "views/member/new.html",
		controller : "memberCtrl"
	})
	;
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

app.controller('memberCtrl',function($scope, $rootScope, $location){
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
    $scope.viewTicket = function(id){
    	alert(id);
/*		members.push($scope.newUser);
		$rootScope.isLogin = true;
    	$rootScope.activeTeam = "";
		$location.path('/team');*/
    };
    $rootScope.activeTeam = "";
 	$scope.members = members;
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