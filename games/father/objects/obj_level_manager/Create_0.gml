global.scoreList = ds_list_create();
randomize();
pos = 0;
gridL = global.len;
gridW = global.wid;
totScore = 0;
//1200*1200 box, this resizes to make sure everything is ok

if (400*gridL > 1200) || (400*gridW > 1200) {
	if (gridL >= gridW) {
		move = 1200/gridL
		size = (1200/gridL)/400;
	} else {
		move = 1200/gridW;
		size = (1200/gridW)/400;
	}
} else {
	move = 400;
	size = 1;
}
x=(room_width/2)-(move*gridW/2);
y=(room_height/2)-(move*gridL/2);
repeat (gridL) {
	repeat (gridW) {
		obj = instance_create_layer(x,y,"Instances",obj_marshmallow);
		obj.burnt = irandom_range(0,1);
		obj.image_xscale = size;
		obj.image_yscale = obj.image_xscale;
		obj.num = pos;
		
	x+=move;
	pos++;
	}
	x=(room_width/2)-(move*gridW/2);
	y+=move;
}