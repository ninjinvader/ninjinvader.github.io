if (strong) {
	sprite_index = spr_fireball_strong;
} else {
	sprite_index = spr_fireball;
}


if (done || x > (room_width/2)+600 || x < (room_width/2)-600 || y > (room_height/2)+600 || y < (room_height/2)-600) {
	image_alpha -= 0.05;
}

if (image_alpha <= 0) {
	instance_destroy(self);
}