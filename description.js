function iOSVersion() {
	var match = (navigator.appVersion).split('OS ');
	if (match.length > 1) {
		return match[1].split(' ')[0].split('_').join('.');
	}
	return false;
}

function loadPackageInfo() {
	var queryVar = getQueryVariable('p');
	var urlSelfParts = window.location.href.split("description.html?p");
	var form_url = urlSelfParts[0] + "packageInfo/"+ queryVar;
	$("#description").text(form_url);

	$.ajax({
		url: form_url,
		type: "GET",
		cache: false,
		crossDomain: true,
		success: function (sender) {
			var decoder = eval('('+sender+')');
			if(decoder.name) {
				document.title = decoder.name;
				$("#name").text(decoder.name);
				$("#name").show();
			}
			if(decoder.version) {
				$("#version").text(decoder.version);
				$("#version").show();
			}
			if(decoder.compatible) {
				$("#compatitle").text(decoder.compatible);
				$("#compatitle_").show();
			}
			if(decoder.description) {
				$("#description").text(decoder.description);
				$("#description").show();
			}
			if(decoder.screenshot) {
				$("#screenshot").text(decoder.screenshot);
				$("#screenshot").show();
			}
			if(decoder.whatsnew) {
				$("#whatsnew").text(decoder.whatsnew);
				$("#whatsnew").show();
			}
        },
		error: function (err) {
			console.log("");
		}
	});
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}