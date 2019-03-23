function iOSVersion() {
	var match = (navigator.appVersion).split('OS ');
	if (match.length > 1) {
		return match[1].split(' ')[0].split('_').join('.');
	}
	return false;
}

function loadPackageInfo() {
	var urlSelfParts = window.location.href.split('description.html?id=');
	var form_url = urlSelfParts[0]+"packageInfo/"+urlSelfParts[1];
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
				$("#desc_long").html(decoder.description);
				$("#desc_long_").show();
			}
			if(decoder.screenshot) {
				$("#compatitle").html(decoder.screenshot);
				$("#compatitle_").show();
			}
			if(decoder.whatsnew) {
				$("#changelog").html(decoder.whatsnew);
				$("#changelog_").show();
			}
        },
		error: function (err) {
			$("#errorInfo").html("Description unavailable for "+urlSelfParts[1]);
		}
	});
}