if (global.pano == 1) {
	x=-animcurve_channel_evaluate(ac_move,p);
	p += 1/2880;
	if (p >= 1){
		p = 0;
	}
}