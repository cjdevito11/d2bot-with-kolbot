/**
*	@filename	Tombs.js
*	@author		kolton
*	@desc		clear Tal Rasha's Tombs
*/

function Tombs() {
	var i;
	Pather._teleport = Pather.teleport;
	
	Town.doChores();
	Pather.useWaypoint(46);
	Precast.doPrecast(true);

	for (i = 66; i <= 72; i += 1) {
		if (!Pather.moveToExit(i, true)) {
			throw new Error("Failed to move to tomb");
		}
		Pather.makePortal();
		//say("c");
		say("1");
		delay(10000);
		Pather.teleport = !Config.Tristram.WalkClear && Pather._teleport;
		
		Attack.clearLevel(Config.ClearType);

		if (i === 69) {
			Precast.doPrecast(true);
		}

		if (!Pather.moveToExit(46, true)) {
			throw new Error("Failed to move to Canyon");
		}
	}
	
	Pather.teleport = Pather._teleport;

	return true;
}