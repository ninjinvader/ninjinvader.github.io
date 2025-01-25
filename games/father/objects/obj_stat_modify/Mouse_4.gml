switch (stat) {
	case 0:
		global.wid++;
		global.wid = clamp(global.wid,1,10);
		break
	case 1:
		global.wid--;
		global.wid = clamp(global.wid,1,10);
		image_index = 1;
		break;
	case 2:
		global.len++;
		global.len = clamp(global.len,1,10);
		break;
	case 3:
		global.len--;
		global.len = clamp(global.len,1,10);
		image_index = 1;
		break;
}