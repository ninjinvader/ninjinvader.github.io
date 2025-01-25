draw_set_alpha(0.4);
draw_rectangle_color((room_width/2)-(move*gridW/2),(room_height/2)-(move*gridL/2),(room_width/2)+(move*gridW/2),(room_height/2)+(move*gridL/2),c_black,c_black,c_black,c_black,0);
draw_rectangle_color((room_width/2)-720,0,(room_width/2)+720,100,c_black,c_black,c_black,c_black,0);
draw_set_alpha(1);
draw_set_font(f_score);
draw_set_halign(fa_center);
draw_set_valign(fa_center);

for (var f=0; f<global.len*global.wid; f++) {
	totScore += global.scoreList [|f];
}
if (totScore > global.highscore) {
	global.highscore = totScore;
}
if (round(totScore/(global.len*global.wid*5)*100) >= global.highpercent) {
	global.highpercent = round(totScore/(global.len*global.wid*5)*100);
}
draw_text(room_width/2,50,string(totScore) + " / " + string(global.len*global.wid*5) + " (" + string(round(totScore/(global.len*global.wid*5)*100)) + "%) | HIGH POINTS: " + string(global.highscore) + " - HIGH PERCENT: " + string(global.highpercent) + "%");
totScore = 0;