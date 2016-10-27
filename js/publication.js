var market = decodeURIComponent(location.search.split('market=')[1])

if (market != undefined) {
    $.getJSON("config.json", function(data) {

        $.each(data, function(key, val) {
            for (var i = 0; i < val.length; i++) {
                $.each(val[i], function(key, val) {
                    if (market == key) {
                        setParameters(val);
                    }
                });
            };
        });
    });
}


function setParameters(data) {
    $.each(data, function(key, val) {
        if (key == 'phone' && val != '') {
            var element = document.getElementById("mcis-phone-number");
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
            element.appendChild(document.createTextNode(val));
            element = document.getElementById("mcis-phone-number-link");
            element.setAttribute('href', 'tel:' + val);

            
        }
        if (key == 'email' && val != '') {
            var element = document.getElementById("mcis-email");
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
            element.appendChild(document.createTextNode(val.toLowerCase()));
            element = document.getElementById("mcis-email-link");
            element.setAttribute('href', 'mailto:' + val.toLowerCase());
        }
        if (key == 'workingHours' && val != '') {
            var element = document.getElementById("mcis-working-hours");
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
            element.appendChild(document.createTextNode('Mon-Fri ' + val));
            var element = document.getElementById("mcis-weekend-hours");
            element.innerHTML = 'Sat-Sun Limited Hours';
        }
        if (key == 'sitename' && val != '') {

            siteName = val;

            var element = document.getElementById("pbm-sign-in");
            element.setAttribute('href', 'https://account.' + val + '.com/personal-information');

            var element = document.getElementById("pbm-member-guide");
            element.setAttribute('href', 'http://' + val + '.com/memberguide');

            var element = document.getElementById("pbm-e-newspaper");
            element.setAttribute('href', 'https://account.' + val + '.com/enewspaper');

            var element = document.getElementById("pbm-start-stop");
            element.setAttribute('href', 'https://account.' + val + '.com/delivery-temporary-stop');

            var element = document.getElementById("pbm-report-issue");
            element.setAttribute('href', 'https://account.' + val + '.com/delivery-issue');

            var element = document.getElementById("pbm-payment");
            element.setAttribute('href', 'https://account.' + val + '.com/pay');
            
            var element = document.getElementById("pbm-history");
            element.setAttribute('href', 'https://account.' + val + '.com/history');
        }
        if (key == 'chatUrl' && val != '') {
            var element = document.getElementById("pbm-chat-url");
            if (val == 'NA') {
                element.removeChild(element.firstChild);
            } else {
                element.setAttribute('href', val);
            }
        }
        if (key == 'use2xLogo' && val != '') {
            var element = document.getElementById("sh-header-image");
            var img = new Image();
            img.className = 'sh-actual-pub-logo';
            if (val == 'true')
                img.src = 'http://www.gannett-cdn.com/sites/' + siteName + '/images/footer-logo@2x.png';
            else {
                img.src = 'http://www.gannett-cdn.com/sites/' + siteName + '/images/footer-logo.png';
            }            
            element.appendChild(img);

        }
        if (key == 'weekendHours' && val != '') {
            var element = document.getElementById("mcis-weekend-hours");
            element.innerHTML = 'Sat-Sun ' + val;
        }
    });
}