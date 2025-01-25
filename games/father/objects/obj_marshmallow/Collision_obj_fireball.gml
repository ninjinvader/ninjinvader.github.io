if (other.cId != id && ds_list_find_index(dmgList,other.id) == -1) {
	ds_list_add(dmgList,other.id);
	if (global.crazyMode == 1) {
		if (burnt != 5) {
	switch (type) {
		case 0:
			angle = 0;
			repeat(4) {
				obj = instance_create_depth(x+sprite_width/2,y+sprite_height/2,-50,obj_fireball);
				obj.cId = id;
				obj.direction = angle;
				obj.image_angle = angle;
				obj.speed = 7;
				obj.image_xscale = image_xscale;
				obj.image_yscale = image_yscale;
				obj.strong = false;
				angle += 90;
			}
			break;
		case 1:
			angle = 45;
			repeat(4) {
				obj = instance_create_depth(x+sprite_width/2,y+sprite_height/2,-50,obj_fireball);
				obj.cId = id;
				obj.direction = angle;
				obj.image_angle = angle;
				obj.speed = 7;
				obj.image_xscale = image_xscale;
				obj.image_yscale = image_yscale;
				obj.strong = false;
				angle += 90;
			}
			break;
		case 2:
			angle = 0;
			repeat(2) {
				obj = instance_create_depth(x+sprite_width/2,y+sprite_height/2,-50,obj_fireball);
				obj.cId = id;
				obj.direction = angle;
				obj.image_angle = angle;
				obj.speed = 7;
				obj.image_xscale = image_xscale;
				obj.image_yscale = image_yscale;
				obj.strong = true;
				angle += 180;
			}
			break;
		case 3:
			angle = 90;
			repeat(2) {
				obj = instance_create_depth(x+sprite_width/2,y+sprite_height/2,-50,obj_fireball);
				obj.cId = id;
				obj.direction = angle;
				obj.image_angle = angle;
				obj.speed = 7;
				obj.image_xscale = image_xscale;
				obj.image_yscale = image_yscale;
				obj.strong = true;
				angle += 180;
			}
			break;
		case 4:
			angle = 25;
			repeat(4) {
				obj = instance_create_depth(x+sprite_width/2,y+sprite_height/2,-50,obj_gust);
				obj.cId = id;
				obj.direction = angle;
				obj.image_angle = angle;
				//obj.speed = 4;
				obj.image_xscale = image_xscale;
				obj.image_yscale = image_yscale;
				obj.strong = true;
				angle += 90;
			}
			break;
		case 5:
			angle = 90;
			repeat(1) {
				obj = instance_create_depth(x+sprite_width/2,y+sprite_height/2,-50,obj_fireball_fake);
				obj.cId = id;
				obj.image_xscale = image_xscale;
				obj.image_yscale = image_yscale;
				obj.tx = irandom_range(-global.wid/2,global.wid/2)*obj_level_manager.move+(room_width/2)-sprite_width/2;
				obj.ty = irandom_range(-global.len/2,global.len/2)*obj_level_manager.move+(room_height/2)-sprite_height/2;
			}
			break;
	}
}
	}
	burnt ++;
	bobj = instance_create_depth(x,y,-25,obj_burn);
	bobj.image_xscale = image_xscale;
	bobj.image_yscale = image_yscale;
	if (!other.strong) {
		instance_destroy(other);
	}
}
burnt = clamp(burnt,0,5);
