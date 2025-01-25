direction = point_direction(x,y,tx,ty);
speed = (distance_to_point(tx,ty)/100)+2;
image_angle = direction;

if (distance_to_point(tx,ty) <= 12 && !done) {
	obj = instance_create_layer(x,y,"Instances",obj_fireball);
	obj.cId = id;
	obj.speed = speed;
	obj.direction = direction;
	obj.image_angle = direction;
	speed = 0;
	done = true;
}

if (done) {
	image_alpha -= 0.01;
	speed = 0;
}
if (x > (room_width/2)+600 || x < (room_width/2)-600 || y > (room_height/2)+600 || y < (room_height/2)-600) {
	image_alpha -= 0.05;
}
if (image_alpha <= 0) {
	instance_destroy(self);
}