  var name = 'Rohit Saini';
    var honey = "My Profile";





    //File From INdex2.html



    var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.IsVisible = false;
    $scope.name = "John Doe";
    $scope.lastname = "Doe";    
    $scope.honey = "Yo Yo Honey Singh!"; 
    $scope.dob = "July 23, 2000" ;
    $scope.work = "Coder, gamer" ;
    $scope.address = "IISERB, H6,234";
    $scope.init1 = "coding";
    $scope.init2 = "smrufing";
    $scope.init3 = "gaming";
    $scope.init4 = "bakchodi";
    $scope.init5 = "CSGO";
    $scope.userimg = "w3images/userhoney.jpg";

    $scope.upEventTitle = "Grah-parvesh";
    $scope.upEventTime = "January 18";
    $scope.upEventInfo = "Buy Tickets";
    $scope.eventImage = "w3images/event.jpg";



    $scope.statusTime= "30 Min.";
    $scope.statusContent ="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    $scope.statusImage1 = "w3images/nature.jpg";
    $scope.statusImage2 = "w3images/lights.jpg";
    $scope.LikedOrUnliked = "Like";
    $scope.commentN = "why sad bro?";

    $scope.numberOfMessages = 2;
    $scope.numberOfNotification = 3;
    $scope.nameOfFriendRequest = "Salman Khan";
    $scope.imageOfFriendRequest = "w3images/salmankhan.jpg";

    $scope.sahil = function(){
       // resetForm();
         $scope.IsVisible =  $scope.IsVisible =  true;
        $scope.statusContentN = document.getElementById('input').value;
        $scope.statusTimeN = "Just Now";
    $scope.nameN = "Rohit Saini";
    //document.getElementById("input").reset();
    document.getElementById('input').value = '';

    }
    $scope.likeButton = function(){
     $scope.LikedOrUnliked = "Liked";   

    }

     $scope.commentButton = function(){
    // $scope.IsVisible =  $scope.IsVisible =  true;
    document.getElementById('commentBox').style.display = 'inline';
    }

     $scope.commentPost = function(){
            //document.getElementById('mydiv').style.visibility='visible';
            $scope.commentData = document.getElementById('commentText').value;
            document.getElementById('commentText').value = "";

            
    }

    $scope.acceptFriendRequest = function(){
        alert('req. accepted');
        document.getElementById('friendRequestBox').style.display = "none";
        $scope.numberOfNotification = $scope.numberOfNotification -1;
         document.getElementById('nawMessageFriend').style.display = "inline";
                //friendRequestNotification
         document.getElementById('friendRequestNotification').style.display = "none";
      
    }

      $scope.declineFriendRequest = function(){
        alert('req. declined');
        document.getElementById('friendRequestBox').style.display = "none";
        $scope.numberOfNotification = $scope.numberOfNotification -1;
          document.getElementById('friendRequestNotification').style.display = "none";

    }



    $scope.kuchBhiFunction = function(){
        alert('gg ab function chaelga');
    }
    

          

  });