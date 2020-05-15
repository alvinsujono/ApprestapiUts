'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
    .get(jsonku.index);
    app.route('/tampil')
    .get(jsonku.tampilsemuamontir);
    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanid);
        app.route('/tambah')
        .post(jsonku.tambahMontir);

        app.route('/tampils')
        .get(jsonku.tampilsemuasparepart);
        app.route('/tampils/:id')
        .get(jsonku.tampilsparepartberdasarkanid);
}