/**
*	@filename	Nihlathak.js
*	@author		kolton
*	@desc		kill Nihlathak
*/

function Nihlathak() {
	var nihx;
	var nihy;
	
	Town.doChores();
	Pather.useWaypoint(123);
	Precast.doPrecast(false);

	if (!Pather.moveToExit(124, true)) {
		throw new Error("Failed to go to Nihlathak");
	}

	Pather.moveToPreset(me.area, 2, 462, 0, 0, false, true);

	if (Config.Nihlathak.ViperQuit && getUnit(1, 597)) {
		print("Tomb Vipers found.");

		return true;
	}
	
// mines
/*
	    print("Finding Nihlthak");
    var pre = getPresetUnits(me.area, null, null, null);

    for (var i = 0; i < pre.length; i++) {
		nihx = pre[i].roomx * 5 + pre[i].x;
		nihy = pre[i].roomy * 5 + pre[i].y;
        print ("Nihlthak x: " + (pre[i].roomx*5 + pre[i].x) + " y " + (pre[i].roomy*5+pre[i].y) + " type " + pre[i].type + " id " + pre[i].id);
    }
	*/
	//Attack.securePosition(nihx, nihy, 10, 0, false);
//
	Attack.kill(526); // Nihlathak
	Pickit.pickItems();

	return true;
}