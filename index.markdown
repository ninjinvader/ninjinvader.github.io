---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Ninjinvader
layout: default
game_directory: games/title_v1
---
Welcome to Ninjinvader.com!

>> You may not know this, but I acually make lots of small games/projects in my spare time.

I hope you enjoy some free games! Keep in mind there might be bugs or issues.

<div id="game_wrapper" style="height:375px; overflow: hidden">
  <iframe src= "/games/title_v2/" id="main_screen_game"
   width="2000"
   height="1500"
   style="-webkit-transform:scale(0.25);-moz-transform-scale(0.25);-moz-transform-origin: top left; -webkit-transform-origin: top left; -o-transform-origin: top left; -ms-transform-origin: top left; transform-origin: top left; overflow: hidden;"
   ></iframe>
</div>

## Links
Nothing yet...

## Games
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>



<script>
document
  .getElementsById("main_screen_game")[0]
  .contentWindow.document.body.focus();
</script>