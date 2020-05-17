var express = require('express');
var auth = require('./auth');
var control = require('../controller');
var router = express.Router();
var verifikasi = require('./verifikasi');

//daftarkan menu registrasi
router.post('/api/v1/register', auth.registrasi);
router.post('/api/v1/login', auth.login);
router.post('/user/pelanggan/tambahdataservis', verifikasi.verifikasi2(), control.tambahservice);

//admin
router.post('/user/admin/input/montir', verifikasi.verifikasi1(), control.tambahmontir);
router.post('/user/admin/input/sparepart', verifikasi.verifikasi1(), control.tambahsparepart);
router.post('/user/admin/input/user', verifikasi.verifikasi1(), control.tambahuser);
router.post('/user/admin/input/level', verifikasi.verifikasi1(), control.tambahlevel);
router.post('/user/admin/input/servis', verifikasi.verifikasi1(), control.tambahservis);
