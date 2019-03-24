function iOSVersion() {
	var match = (navigator.appVersion).split('OS ');
	if (match.length > 1) {
		return match[1].split(' ')[0].split('_').join('.');
	}
	return false;
}

function loadPackageInfo() {
	var queryVar = getQueryVariable('p');
	var urlSplit = window.location.href.split('description.html?id=');
	var formURL = urlSplit[0] + "packageInfo/" + urlSplit[1];
	$("#description").text(formURL);

	$.ajax({
		url: formURL,
		type: "GET",
		cache: false,
		crossDomain: true,
		success: function (returnhtml) {
			var decodeResp = eval('('+returnhtml+')');
			if(decodeResp.name) {
				document.title = decodeResp.name;
				$("#name").text(decodeResp.name);
			}
			if(decodeResp.version) {
				$("#version").text(decodeResp.version);
			}
			if(decodeResp.compatible) {
				$("#compatitle").text(decodeResp.compatible);
			}
			if(decodeResp.description) {
				$("#description").text(decodeResp.description);
			}
			if(decodeResp.screenshot) {
				$("#screenshot").text(decodeResp.screenshot);
			}
			if(decodeResp.whatsnew) {
				$("#whatsnew").text(decodeResp.whatsnew);
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