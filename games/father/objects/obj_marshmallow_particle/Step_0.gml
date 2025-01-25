image_angle += ang;

if (y <= -400) {
	instance_create_layer(irandom_range(1600,1750),1900,"marshmallows",obj_marshmallow_particle);
	instance_destroy(self);
}


