Template.home.events({
    // INSERE NO BANCO (CREATE)
    'submit form': function (e) {
        e.preventDefault(); // not refresh page
        var titulo = e.target.titulo.value;
        var descricao = e.target.descricao.value;

        var obj = {
            titulo: titulo,
            descricao: descricao

        };
        // Metodo de insercao
        if (this._id) {
            Meteor.call('updateData', this._id, obj)
        }
        // Metodo de atualizacao
        else {
            Meteor.call('insertData', obj);
        }
    },

    // REMOVE DO BANCO (DELETE)
    'click #remove': function (e) {
        crud.remove(this._id);
    }
});

Template.home.helpers({
    // RETORNA OS DADOS DO BANCO (RETURN)
    getData: function () {
        return crud.find();
    }
});