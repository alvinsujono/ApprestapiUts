'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res)
};
//menampilkan semua data montir
exports.tampilsemuamontir = function (req, res) {
    connection.query('SELECT * FROM t_montir', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};
//menampilkan semua data montir berdasarkan id
exports.tampilberdasarkanid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM t_montir WHERE id_montir = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};
//menambahkan data montir
exports.tambahMontir = function (req, res) {
    var id_montir = req.body.id_montir;
    var Nama_montir = req.body.Nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('INSERT INTO t_montir (id_montir,Nama_montir,harga_perjam) VALUES(?,?,?)',
        [id_montir, Nama_montir, harga_perjam],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};
//menampilkan semua data sparepart
exports.tampilsemuasparepart = function (req, res) {
    connection.query('SELECT * FROM t_sparepart', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};
//menampilkan semua data sparepart berdasarkan id
exports.tampilsparepartberdasarkanid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM t_sparepart WHERE id_sparepart = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};
//menambahkan data sparepart
exports.tambahsparepart = function (req, res) {
    var id_sparepart = req.body.id_sparepart;
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;

    connection.query('INSERT INTO t_sparepart (id_sparepart,nama_sparepart,harga_sparepart,satuan) VALUES(?,?,?,?)',
        [id_sparepart, nama_sparepart, harga_sparepart,satuan],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};

//menambahkan data service
exports.tambahservice = function (req, res) {
    
    var tgl_service = req.body.tgl_service;
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    var id_sparepart = req.body.id_sparepart;

    connection.query('INSERT INTO t_servis (tgl_service,id_user,id_montir,jumlah_sparepart,id_sparepart) VALUES(?,?,?,?,?)',
        [tgl_service,id_user,id_montir,jumlah_sparepart,id_sparepart],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};
//input data montir
exports.tambahmontir = function (req, res) {
    var Nama_montir = req.body.Nama_montir;
    var harga_perjam = req.body.harga_perjam;    


    connection.query('INSERT INTO t_montir (Nama_montir,harga_perjam) VALUES (?,?)',
        [Nama_montir, harga_perjam],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Input Data Montir Sukses", res);
            }
        });
};
//input data user
exports.tambahuser = function (req, res) {
    var nama_user = req.body.nama_user;
    var email = req.body.email;
    var password = req.body.password;
    var level = req.body.level;

    connection.query('INSERT INTO t_user (nama_user,email,password,level) VALUES (?,?,?,?)',
    [nama_user,email,password,level],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Input User Sukses", res);
            }
        });
};