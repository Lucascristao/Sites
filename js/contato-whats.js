var wa_config = { "kode_area": "55", "nomor_whatsapp": "85989714582", "nama_admin": "Lucas ", "pesan_salam": "Quero seus serviÃƒÂ§os de Designer grÃƒÂ¡fico", "posisi_widget": "kiri"
};
let load_inline_css = document.createElement('style');
load_inline_css.type = "text/css";
load_inline_css.innerHTML = '.load_whatsapp * {box-sizing:border-box;margin:0;padding:0;}.grid-wa {display:grid;grid-gap:10px;}.grid-wa.col2 {grid-template-columns:1fr 1fr;}.grid-wa.col3 {grid-template-columns:1fr 1fr 1fr;}.grid-wa.col4 {grid-template-columns:1fr 1fr 1fr 1fr;}.grid-wa.copyright-wa {grid-template-columns:1fr;}.grid-wa.copyright-wa .info {display:none;}.grid-wa.copyright-wa .info small {display:inline-block;margin:auto;}.grid-wa>.item {}.popwa-btn {font-family:"Open Sans", sans-serif;position:relative;position:fixed!important;z-index:+100;bottom:20px;}.popwa-btn.kiri {left:20px;}.popwa-btn.kanan {right:20px;}.popwa-btn i.wa {position:relative;display:block;width:60px;height:60px;line-height:60px;text-align:center;background:#fff;color:#23CC62;border-radius:60px;box-shadow:0 5px 15px rgba(0,0,0,.1);font-size:30px;}.popwa-btn:active i.wa {box-shadow:none;}.popwa-btn span.count {position:absolute;display:inline-block;top:-2px;right:-2px;background:#E91B43;color:#fff;height:20px;line-height:20px;width:20px;border-radius:20px;font-size:8px;text-align:center;font-style:normal;font-weight:bold;box-shadow:inset 0 -3px 0 rgba(0,0,0,.1);transform:scale(0.0);}.popwa-btn.show span.count {transform:scale(1.1);transition:.2s;}.popwa-btn span.info {display:inline-block;white-space:nowrap;border-radius:4px;background:#fff;font-size:14px;height:40px;line-height:40px;padding:0 15px;text-align:center;position:relative;position:absolute!important;box-shadow:0 5px 15px rgba(0,0,0,.1);bottom:8px;color:rgba(0,0,0,.6);opacity:0;visibility:hidden;}@media(max-width:480px) {.popwa-btn span.info {display:none;}}.popwa-btn.show span.info {opacity:1;visibility:visible;transition:1s;}.popwa-btn.kiri span.info {left:calc(100% + 45px);}.popwa-btn.kiri.show span.info {left:calc(100% + 15px);}.popwa-btn.kanan span.info {right:calc(100% + 45px);}.popwa-btn.kanan.show span.info {right:calc(100% + 15px);}.popwa-btn span.info:after {position:absolute;top:calc(50% - 8px);content:"";border:8px solid;}.popwa-btn.kiri span.info:after {right:100%;border-color:transparent #fff transparent transparent ;}.popwa-btn.kanan span.info:after {left:100%;border-color:transparent transparent transparent #fff ;}.popwa-btn span.info i {display:inline-block;font-size:140%;margin-right:5px;vertical-align:middle;color:#4FC3F7;}.popwa {font-size:14px;line-height:1.6;}.popwa * {font-family:"Open Sans", sans-serif;}.popwa b,.popwa strong {font-weight:600;}.popwa {display:flex;position:relative;position:fixed !important;z-index:1000000;top:0;left:0;width:100%;height:100%;overflow-y:auto;padding:20px 0;visibility:hidden;opacity:0;}.popwa.open {visibility:visible;opacity:1;transition:.4s;}.popwa a {text-decoration:none;}.popwa .wrap {display:block;margin:auto auto;width:calc(100% - 30px);box-shadow:0 20px 50px rgba(0, 0, 0, .2);max-width:500px;}.popwa .wrap .title {display:block;margin:0;height:60px;line-height:60px;border-bottom:1px solid #eee;font-size:14px;background:#fff;border-radius:4px 4px 0 0;font-weight:400;}.popwa .wrap .title span.title-content {padding:0 20px;color:#444;font-size:110%;}.popwa .wrap .title span.title-content i {color:#23CC62;font-size:140%;display:inline-block;vertical-align:middle;margin-right:10px;}.popwa .wrap .title .closePop {color:#aaa;float:right;padding:0 20px;cursor:pointer;font-size:25px;font-weight:normal;transition:.2s;}.popwa .wrap .title .closePop:hover {color:#444;}.popwa .wrap .title .closePop:before {content:"";cursor:default;display:block;position:fixed;z-index:-2;top:0;left:0;width:100%;height:calc(100% + 100px);background:rgba(0, 0, 0, .4);}.popwa .wrap .content {display:block;background:#fff;border-radius:0 0 4px 4px;}.popwa .popwa-wrap {padding:20px;}#kirim-wa.form-wa * {outline:none;text-decoration:none;}#kirim-wa.form-wa a {color:#23CC62;}#kirim-wa.form-wa br {margin:0;padding:0;line-height:0;}#kirim-wa.form-wa .focus {box-shadow:inset 0 0 0 1px #FFBA00;}#kirim-wa.form-wa label {position:relative;display:block;width:100%;margin:0;padding:0;}#kirim-wa.form-wa label > input,#kirim-wa.form-wa label > select,#kirim-wa.form-wa label > textarea {position:relative;z-index:1;border:none;box-shadow:inset 0 0 0 1px rgba(0, 0, 0, .02), inset 1px 1px 5px rgba(0,0,0,.05);background:rgba(0, 0, 0, .02);padding:10px 15px;width:100%;border-radius:4px;padding-left:40px;}#kirim-wa.form-wa label > small {display:block;margin-top:5px;position:relative;z-index:3;color:rgba(0,0,0,.4);}#kirim-wa.form-wa label > small a {margin-left:5px;font-size:150%;display:inline-block;vertical-align:middle;color:rgba(0,0,0,.4);}#kirim-wa.form-wa label > small a:hover {color:rgba(0,0,0,.8);}#kirim-wa.form-wa label > i {position:absolute;z-index:0;display:inline-block;vertical-align:middle;width:40px;padding:10px 0;text-align:center;font-size:18px;height:100%;line-height:100%;background:transparent;box-shadow:none;vertical-align:bottom;bottom:0;left:0;color:rgba(0,0,0,.2);}#kirim-wa.form-wa select::-ms-expand {display:none;}#kirim-wa.form-wa select {-webkit-appearance:none;-moz-appearance:none;-webkit-appearance:none;appearance:none;}#kirim-wa.form-wa label>*:focus {background:transparent;}#kirim-wa.form-wa label textarea {min-height:40px;resize:vertical;margin-bottom:0;}#kirim-wa.form-wa label .validasi {position:relative;position:absolute !important;z-index:2;top:calc(100% + 10px);left:0;background:#FFBA00;color:rgba(0, 0, 0, .6);padding:5px 10px;border-radius:3px;font-size:80%;box-shadow:0 5px 10px rgba(0,0,0,.1);transition:.4s;visibility:hidden;opacity:0;display:inline-block !important;}#kirim-wa.form-wa label .validasi.show {visibility:visible;opacity:1;top:100%;}#kirim-wa.form-wa label .validasi:after {position:absolute;bottom:100%;left:12px;content:"";border:8px solid;border-color:transparent transparent #FFBA00 transparent;}#kirim-wa.form-wa .submit {display:block;text-align:center;border:none;width:100%;display:block;background:#23CC62;color:#fff;padding:10px 20px;cursor:pointer;box-shadow:inset 0 -4px 0 0 rgba(0, 0, 0, .1);border-radius:4px;font-weight:600;font-size:105%;letter-spacing:1px;}#kirim-wa.form-wa .submit i {display:inline-block;vertical-align:middle;font-size:140%;margin-right:10px;}#kirim-wa.form-wa .submit:active {box-shadow:none;}';
document.getElementsByTagName('head')[0].appendChild(load_inline_css);
let load_whatsapp = document.createElement('div');
load_whatsapp.className = "load_whatsapp";
load_whatsapp.innerHTML = '\<a href="#whatsapp" class="popwa-btn '+wa_config["posisi_widget"]+'" data-title="Chat via <b>WhatsApp</b>">\ <i class="wa icon ion-logo-whatsapp">\ <span class="count">1</span>\ </i>\ <span class="info">\ <b><i class="icon ion-md-done-all"></i> '+ wa_config["nama_admin"] + '</b> - Online\ </span>\</a>\<div class="popwa" id="whatsapp">\ <div class="wrap">\ <h3 class="title clear">\ <span class="title-content">\ <i class="icon ion-logo-whatsapp">\ </i>\ <span class="get_title"></span>\ </span>\ <a class="closePop" href="javascript:void(0);">&times;</a>\ </h3>\ <div class="content">\ <div class="popwa-wrap">\ <div id="kirim-wa" class="form-wa">\ <div class="grid-wa col2">\ <label class="item">\ <i class="icon ion-md-contact"></i>\ <input class="nama wajib" type="text" placeholder="Nome">\ \ </label>\ <label class="item">\ <i class="icon ion-md-mail"></i>\ <input class="email wajib" type="email" placeholder="E-mail">\ </label>\ \ </div>\ <br />\ <label>\ <i class="icon ion-ios-chatboxes"></i>\ <textarea class="pesan wajib" placeholder="Mensagem"></textarea>\ </label>\ <br />\ \ <div class="grid-wa copyright-wa">\ <center class="item info">\ <small>âš¡ by. <a class="credit-wa" href="https://www.jasa-design.web.id" target="_blank">Jd</a></small>\ </center>\ <a onclick="kirim_WA(); return false;" type="submit" class="submit item" ><i class="icon ion-logo-whatsapp"></i> ENVIAR</a>\ </div>\ \ </div>\ </div>\ </div>\ </div>\</div>\
';
document.body.appendChild(load_whatsapp);
if(typeof jQuery=='undefined') { var headTag = document.getElementsByTagName("head")[0]; var loadJQUERY = document.createElement('script'); loadJQUERY.type = 'text/javascript'; loadJQUERY.src = 'https://raw.githack.com/Lucascristao/Sites/master/js/jquery.js'; loadJQUERY.onload = myJQUERY; headTag.appendChild(loadJQUERY);
}
function myJQUERY() {}
window.addEventListener("load", function() { var dasar = 'c', bangsat = 'red', credit = 'it-wa', crwa = jQuery('.'+dasar+bangsat+credit), ehem = '.', edan = 'a', nya = 'e', maling = 'cek'+ehem+'j'+edan+'s'+edan+'-d'+nya+'sign', mau = 'https://', hakcipta = ehem + 'w'+nya+'b'+ ehem +'id'; crwa.attr('href',mau+maling+hakcipta+'/contactform-wa/'); if (crwa.val() == null) { window.location.href = mau+maling+hakcipta; }	var web_title = jQuery('title').text();	var audio = document.createElement("audio");	audio.src = "https://cek.jasa-design.web.id/contactform-wa/widget/file/wa.mp3";	audio.preload = "auto";	audio.addEventListener("canplaythrough", function () {	setTimeout(function(){	audio.play();	jQuery('title').text('ðŸ’¬ 1 - ' + web_title);	jQuery('.popwa-btn').addClass('show');	}, 1000);	}, false);	jQuery('.popwa-btn').on('click', function(){	jQuery(this).removeClass('show');	jQuery('title').text(web_title);	});	function load_headlink(file) { var load_link = document.createElement('link');	load_link.rel = 'stylesheet';	load_link.href = file; document.head.appendChild(load_link);	}	load_headlink('https://unpkg.com/ionicons@4.5.5/dist/css/ionicons.min.css');	load_headlink('https://fonts.googleapis.com/css?family=Open+Sans:400,600');	jQuery('.popwa-btn').on('click', function() { var title = jQuery(this).attr('data-title'); var target = jQuery(this).attr('href'); jQuery(target).addClass('open'); jQuery(target).find('.get_title').html(title);	});	jQuery('.popwa .closePop').on('click', function() { jQuery(this).parents('.popwa').removeClass('open');	});	jQuery(document).keyup(function(e) { if (e.key === "Escape") { jQuery('.popwa .closePop').trigger('click'); }	}); jQuery("#kirim-wa input, #kirim-wa textarea").on('keypress', function() { if (event.keyCode === 13) { jQuery(this).parents("#kirim-wa").find('.submit').trigger('click'); }	});	jQuery('#kirim-wa .wajib').each(function() { title = jQuery(this).attr('placeholder'); label = jQuery(this).parents('label'); jQuery('<span class="validasi"><b>' + title + '</b> (necessário)</span>').appendTo(label);	});	jQuery('#kirim-wa .wajib').keyup(function() { if (jQuery(this).val() != '') { jQuery(this).removeClass('focus'); jQuery(this).parents('label').find('.validasi').removeClass('show'); }	});	jQuery("#kirim-wa select").change(function() { jQuery(this).removeClass('focus'); jQuery(this).parents('label').find('.validasi').removeClass('show');	});
}, false);
function kirim_WA() { var validasi = true; jQuery('#kirim-wa .wajib').each(function() { if ($.trim(jQuery(this).val()) == '' || $.trim(jQuery(this).val()) == 'default') { jQuery(this).addClass('focus'); } }); jQuery('#kirim-wa .wajib').each(function() { if ($.trim(jQuery(this).val()) == '') { jQuery(this).parents('label').find('.validasi').addClass('show'); validasi = false; jQuery(this).focus(); return false; } else if ($.trim(jQuery(this).val()) == 'default') { jQuery(this).parents('label').find('.validasi').addClass('show'); validasi = false; return false; } }); if (validasi === true) { var url_wa = 'https://web.whatsapp.com/send'; if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { url_wa = 'whatsapp://send'; }	var kode_area = wa_config["kode_area"],	nomor_whatsapp = wa_config["nomor_whatsapp"],	nama_admin = wa_config["nama_admin"],	pesan_salam = wa_config["pesan_salam"]; var judul = jQuery('#whatsapp .get_title').text(); var nama = jQuery('#kirim-wa .nama').val(); var email = jQuery('#kirim-wa .email').val(); var pesan = jQuery('#kirim-wa .pesan').val(); jQuery(this).attr('href', url_wa + '?phone=' + kode_area + nomor_whatsapp + '&text=' + pesan_salam + ' ' + nama_admin + '..%0A' + 'saya *' + nama + '*, ingin *' + judul + '*' + '%0A%0AðŸ’¬ ' + pesan + '%0A%0A' + 'E-mail. ' + email + '%0A' + 'via ' + location.href); var w = 960, h = 540, left = Number((screen.width / 2) - (w / 2)), tops = Number((screen.height / 2) - (h / 2)), popupWindow = window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left); popupWindow.focus(); return false; }
}
