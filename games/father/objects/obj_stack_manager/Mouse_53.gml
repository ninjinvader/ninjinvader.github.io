if (!spawning) {
	ready = true;
}
if (ready) {
	spawning = true;
	alarm[0] = room_speed * 0.5;
	ready = false;
}

