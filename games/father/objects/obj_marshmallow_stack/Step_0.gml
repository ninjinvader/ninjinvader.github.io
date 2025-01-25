if (image_xscale < 1) {
	image_xscale += 0.01;
	image_yscale = image_xscale;
}
if (image_xscale >= 1 && !done) {
	ready = true;
	
}
if (!drop && y == (room_height/2)-500) {
	x = (sin(read) * 1133)+1133;
	read+=spd;
}
if (drop && !place_meeting(x,y+1,obj_marshmallow_stack)) {
	y += 6;
}
if (place_meeting(x,y+1,obj_marshmallow_stack)) {
	placed = true;
}
if (place_meeting(x,y-5,obj_marshmallow_stack)) {
	top = false;
}

depth = bbox_bottom;

if (placed && y < room_height/2) {
	global.shift = true;
}

if (global.shift && done) {
	y+= 6;
}
if (top && y > room_height/2) {
	global.shift = false;
}