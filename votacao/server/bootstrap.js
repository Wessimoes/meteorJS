// run this when the meteor app is started
Meteor.startup(function () {

    // if there are no polls available create sample data
    if (Polls.find().count() === 0) {

        // create sample polls
        var samplePolls = [
            {
                question: 'Quem é o proximo a morrer em Westeros',
                choices: [
                    {text: 'Arya', votes: 0},
                    {text: 'Bran', votes: 0},
                    {text: 'Rickon', votes: 0}
                ]
            }
        ];

        // loop over each sample poll and insert into database
        _.each(samplePolls, function (poll) {
            Polls.insert(poll);
        });

    }

});