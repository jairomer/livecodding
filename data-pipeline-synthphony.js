// setcpm: Set the tempo in cycles per minute
setcpm(45); 
$: sound("bd lt*2").bank("doepferms404").lpf(900)
$: note("c3 c4").sound("sine").gain(1)
$: note("<c1 c2*2> <<b2 b3> <a2 a3> < d2 d3>>")
  //.scale("C:minor D:minor")
  //.rev()
  .fast(2)
  //.sound("square")
  .sound("triangle")
  //.jux(rev)
  .ply("<1 6 3>")
  .off(1/4, x=>x.slow(2))
  .lpf(8000)

