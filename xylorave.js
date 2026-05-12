setcpm(60)
$: sound("[bd*2 sd]")
  .bank("RolandTR909")
  .lpf("800")

$: note("<a3 c4> c5")
  .scale("D:dorian")
  .sound("gm_xylophone")
  .room(0.4)
  .delay(0.2)

$: note("[b3*2 a3 c3 c5]/4")
  .scale("A2:minor")
  .sound("triangle")
  //.vowel("< <a e> <e i> [e a] [o e] [i a]>")

