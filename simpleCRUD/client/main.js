Posts = new Meteor.Collection("posts");

if (Meteor.isClient) {
    Meteor.subscribe("posts");
    Template.postForm.events({
        'click #create': function (e, t) {
            var data;
            data = t.find("#content");
            if (data.value !== "") {
                Posts.insert({
                    content: data.value,
                    time: Date.now()
                });
            }
            return data.value = "";
        }
    });
    Template.posts.post = function () {
        return Posts.find({}, {
            sort: {
                time: -1
            }
        });
    };
    Template.post.editing = function () {
        return Session.get("target" + this._id);
    };
    Template.post.events({
        'click #edit': function (e, t) {
            return Session.set("target" + t.data._id, true);
        },
        'keypress input': function (e, t) {
            var post;
            if (e.keyCode === 13 && e.currentTarget.value !== "") {
                post = Posts.findOne(t.data);
                Posts.update({
                    _id: post._id
                }, {
                    $set: {
                        content: e.currentTarget.value
                    }
                });
                return Session.set("target" + t.data._id, false);
            }
        },
        'click #delete': function (e, t) {
            var post;
            post = Posts.findOne(t.data);
            return Posts.remove({
                _id: post._id
            });
        }
    });
}
if (Meteor.isServer) {
    Meteor.publish("posts", function () {
        return Posts.find();
    });
}