function OpenTab(taab) {
	var i, tabsContent, buttons;
	tabsContent = document.getElementsByClassName("tabscontent");
	for (i = 0; i < tabsContent.length; i++) {
		tabsContent[i].style.display = "none";
	}
	buttons = document.getElementsByClassName("button");
	for (i = 0; i < buttons.length; i++) {
		buttons[i].className = buttons[i].className.replace("active", "");
	}
	document.getElementById(taab).style.display = "block";
}

document.getElementById("defaultOpen").click();
