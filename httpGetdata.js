function httpGetdata(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
var htget =  httpGetdata("https://www.googleapis.com/blogger/v3/blogs/6655370386788643018?key=AIzaSyBDavQEOQnkfJ39VJAKfYtf6M2dGuNhgAQ");//"https://api.github.com/users/cmdav");

console.log(htget);