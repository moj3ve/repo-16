function iOSVersion() {
	var match = (navigator.appVersion).split('OS ');
	if (match.length > 1) {
		return match[1].split(' ')[0].split('_').join('.');
	}
	return false;
}

function loadPackageInfo() {
	var urlSelfParts = window.location.href;
	$("#testing").html(urlSelfParts);
	var form_url = urlSelfParts[0]+"packageInfo/"+urlSelfParts[1];
	console.log(newURL);

	$.ajax({
		url: form_url,
		type: "GET",
		cache: false,
		crossDomain: true,
		success: function (sender) {
			$("#tweakStatusInfo").hide();
			var decoder = eval('('+sender+')');
			if(decoder.name) {
				document.title = decoder.name;
				$("#name").html(decoder.name);
				$("#name").show();
			}
			if(decoder.version) {
				$("#desc_short").html(decoder.version);
				$("#desc_short_").show();
			}
			if(decoder.compatible) {
				$("#compatitle").html(decoder.compatible);
				$("#compatitle_").show();
			}
			if(decoder.description) {
				$("#description").html(decoder.description);
				$("#description").show();
			}
			if(decoder.screenshot) {
				$("#screenshot").html(decoder.screenshot);
				$("#screenshot").show();
			}
			if(decoder.whatsnew) {
				$("#whatsnew").html(decoder.whatsnew);
				$("#whatsnew").show();
			}
        },
		error: function (err) {
			$("#errorInfo").html("Description unavailable for "+urlSelfParts[1]);
		}
	});
	**/
}