// run this when the meteor app is started
Meteor.startup(function() {

    // if there are no polls available create sample data
    if (Polls.find().count() === 0) {

        // create sample polls
        var samplePolls = [
            {
            
            }
        ];

        // loop over each sample poll and insert into database
        _.each(samplePolls, function(poll) {
            Polls.insert(poll);
        });

    }

});