
Messages = new Mongo.Collection("messageCollection");

// Server side code not available on client
if (Meteor.isServer) {


  Meteor.startup(function () {
	  
    if (Messages.find().count() === 0) {
      var sampleMessage = [
            {
					'email': 'test@test.com',
					'timestamp' : new Date(),
					'text' : 'A Sample Message'
				}
				
			 	
      ];
	
			// Insert JS objects into collection
      for (var i = 0; i < sampleMessage.length; i++)
        Messages.insert(sampleMessage[i]);
    }
  });
 /*
  	var testMsg = [
		  
			  {
					'email': 'garbage@garbage.com',
					'timestamp' : new Date(),
					'text' : 'This is a little test message'
					
				}		  
	  ];
	  
	  Messages.insert(testMsg);
	  */


	//Meteor Methods
	Meteor.methods({
		
		addMessage: function(msg){
			 if(!Meteor.user())
      		 {
			throw new Meteor.Error('user not authorised');
  	   	 }
			var em = Meteor.user().emails[0].address;
			msg.email = em;
			msg.timestamp = new Date();  
			Messages.insert(msg);		
		},
		 	
			/*
			 	'email':'',
                'timestamp': '',
                'text': '', 
			*/
			
			
		// Delete a product by its collection id not mongo db ID
		deleteMessage: function(id) {
     		 if(Meteor.user().emails[0].address != "admin@admin.com")
     		 {
      		   throw new Meteor.Error('not-authorized');
      		 }
		  Messages.remove(id);
		}

	});

}
