noise(100,5,30)
.pixelate(100,100)
.kaleid(2)
  .blend(
    shape(100, 0.5, 0.1)
      .diff(shape(100, 0.4))
      .color(1,2,3)
      .modulate(osc(4,1,1))
  )
  .out(o0)osc
