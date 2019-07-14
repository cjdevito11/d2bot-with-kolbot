/**
*	@filename	ClearAnyArea.js
*	@author		kolton
*	@desc		Clears any area
*/

function ClearAnyArea() {
	var i;

	Town.doChores();

	for (i = 0; i < Config.ClearAnyArea.AreaList.length; i += 1) {
		
		//Town.doChores();
		//if (i >= 1) {say("2");} //make follower goto town
		
		if (Pather.journeyTo(Config.ClearAnyArea.AreaList[i])) {
			//Pather.makePortal();
			Precast.doPrecast(true);
			//say("1");
			Attack.clearLevel(Config.ClearType);
		}
	}

	return true;
}