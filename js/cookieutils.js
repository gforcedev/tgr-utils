function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}
function deleteCookie( name ) {
  document.cookie = name + '=; expires=Fri, 20 Jan 2002 11:11:11 GMT;';
}
function setExpireDate(cname, date) {
    document.cookie = cname + "=" + getCookie(cname) + "; expires=" + date;
}
