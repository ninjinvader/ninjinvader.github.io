image_index = 1;
alarm[0] = room_speed * 0.1;

if (room = rm_game) {
	audio_stop_sound(snd_lighter);
	audio_play_sound(snd_lighter,1,0,0.65,0.25,random_range(0.75,1.25));
}