Router.configure({
    layoutTemplate: 'mainLayout'
});
Router.route('/',{
    name:'home'
});
Router.route('/update/:_id',{
    name: 'update',
    template: 'home',
    data: function () {
        return crud.findOne({_id:this.params._id})
    }
});