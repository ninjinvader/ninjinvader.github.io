

//room = rm_game;

incW = instance_create_layer(x+200,y,"Instances",obj_stat_modify);
incW.stat = 0;
decW = instance_create_layer(x-200,y,"Instances",obj_stat_modify);
decW.stat = 1;

incH = instance_create_layer(x+200,y+150,"Instances",obj_stat_modify);
incH.stat = 2;
decH = instance_create_layer(x-200,y+150,"Instances",obj_stat_modify);
decH.stat = 3;