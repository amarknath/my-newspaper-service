$.getJSON("config.json", function(data) {
    document.getElementById('mcas-states').appendChild(createDOM(data));
    dropStateList();
});

function createDOM(data) {
    var section = document.createElement('section');
    section.className = 'mcas-state-menu';
    $.each(data, function(key, val) {
        var button = document.createElement('button');
        button.className = 'mcas-accordion ' + (key.toLowerCase()).replace(/\s/g, '');
        button.appendChild(document.createTextNode(key.toUpperCase()));
        section.appendChild(button);
        section.appendChild(makeSublist(val));
    });
    return section;
}

function makeSublist(data) {
    var div = document.createElement('div')
    div.className = 'mcas-panel';
    var ul = div.appendChild(document.createElement('ul'));
    ul.className = 'mcas-unordered-list';
    for (var i = 0; i < data.length; i++) {
        $.each(data[i], function(key, val) {
            var item = document.createElement('li');
            item.className = 'mcas-publication-list-item';
            var url = item.appendChild(document.createElement('a'));
            url.className = 'mcas-url'
            url.appendChild(document.createTextNode(key));
            url.setAttribute('href', 'publication.html?market=' + key);
            ul.appendChild(item);
        });
    }
    return div;
}

function dropStateList() {
    var acc = document.getElementsByClassName("mcas-accordion");
    var space = document.getElementsByClassName("mcas-white-space");
    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
    var flip = 0;
    $(acc).click(function() {
        $(space).toggle(flip++ % 2 === 0);
    });
    $(acc).click(function() {
        $(space).toggle("duration (default: 400)");
    });
}