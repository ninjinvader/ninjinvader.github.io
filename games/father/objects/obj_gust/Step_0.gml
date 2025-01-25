speed = 4;
image_alpha -= 0.005;

if (image_alpha <= 0) {
	instance_destroy(self);
}

if (distance_to_point(startx,starty) >= obj_level_manager.move) {
	instance_destroy(self);
}

image_angle = direction-90;