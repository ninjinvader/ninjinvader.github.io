randomize();
s = irandom_range(0,2);
if (global.pano == -1) {
	switch(s) {
		case 0:
			sprite_index = spr_bg_1;
			break;
		case 1:
			sprite_index = spr_bg_2;
			break;
		case 2:
			sprite_index = spr_bg_3;
			break;
	}
} else {
	switch(s) {
		case 0:
			sprite_index = spr_pano_1_1;
			break;
		case 1:
			sprite_index = spr_pano_1_1;
			break;
		case 2:
			sprite_index = spr_pano_1_1;
			break;
	}
}

ac_move = animcurve_get_channel(ac_pano,"curve1");
p = 0;