$.getJSON( "test.json", function( data ) {
  document.getElementById('states').appendChild(createDOM(data));
});

function createDOM(data) {
     var section = document.createElement('section');
     section.className = 'state-menu';
    $.each( data, function( key, val ) {
        var button = document.createElement('button');
        button.className = 'accordion '+(key.toLowerCase()).replace(/\s/g, '');
        button.appendChild(document.createTextNode(key.toUpperCase()));
        section.appendChild(button);
        section.appendChild(makeSublist(val));
    });
    return section;
}

function makeSublist(data) {
  var div = document.createElement('div')
  div.className = 'panel';
  var  ul = div.appendChild(document.createElement('ul'));
  for(var i = 0; i < data.length; i++) {
  $.each( data[i], function( key, val ) {
    var item = document.createElement('li');
    item.className = 'publication-list-item';
    var url = item.appendChild(document.createElement('a'));
        url.appendChild(document.createTextNode(key));
        url.setAttribute('href', 'publication.html?market='+key);
        ul.appendChild(item);
  }); 
}
  return div;
}

$(window).load(function() {
debugger;
var acc = document.getElementsByClassName("accordion");
var space = document.getElementsByClassName("whiteSpace");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
      debugger;
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
  }

var flip = 0;
$( acc ).click(function() {
 $( space ).toggle( flip++ % 2 === 0 );
});

$( acc ).click(function() {
 $( space ).toggle( "duration (default: 400)" );
});
});


