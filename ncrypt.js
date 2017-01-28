/* NcryptJS - v0.0.1 - 2017-01-26
* https://github.com/Ogien/
* Copyright (c) 2017 Anton Siedlecki; Licensed MIT */

function obfs_encode (element) {
  if ( $(element).length > 1 ) {
    console.err("use map to lop through 1 by 1");
    return;
  }
  
  var salt = Math.random().toString(36).substring(7);
  var delimiterHTML = "<span style=\"display: none;\">" + salt + "</span>";

  function crypto(s, delimiter) {
    s = s.split('');
    for (var i = 0; i < s.length; i++) {
      s[i] += delimiter;
    }
    return s.join('');
  }

  $(element).html( crypto($(element).text(), delimiterHTML) );
  $(element).attr( "href", crypto($(element).attr("href"), salt) );
  $(element).data({ obfs: { salt: salt, decode: true } });
}

function obfs_decode (event, element) {
  event.preventDefault();

  if ( !($(element).data().obfs.salt.length && $(element).data().obfs.decode) ) return;

  var url = $(element).attr("href").split( $(element).data().obfs.salt ).join('');
  
  window.open(url);
  $(element).removeData("obfs");
  
}