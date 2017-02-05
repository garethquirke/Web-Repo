if (Meteor.isClient) {
  angular.module('messages', ['angular-meteor', 'accounts.ui'])
		.controller('MessageCtrl', function ($scope, $meteor) {

            //message list linked to the mongo collection: Messages
            $scope.messageList = $meteor.collection(Messages);

    //newMessage will used with the Add message form
    $scope.newMessage = {};

            //add message to the list fuction
            $scope.addMessage = function(){

                // Generate the next ID and assign it to the message
                var mIndex = $scope.messageList.length + 1;
                $scope.newMessage.id = mIndex;

                // Add message to the Db collection and reset values
                $meteor.call('addMessage',$scope.newMessage);
                $scope.reset();
            }

          // Delete a message functio
            $scope.deleteMessage = function(m){
                // Use a dialog to confirm delete
                if (confirm("Are you sure you want to delete message id " + m.id + "?")) {
                // Delete object from DB - parameter is the mongo db ID
                $meteor.call('deleteMessage',m._id);
                }
            }
            

            // Deselect message objects
            $scope.reset = function () {
                $scope.newMessage = {                
	            'email':'',
                'timestamp': '',
                'text': '',};
            }
  });
}