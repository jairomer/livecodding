/********
* RECAP *
*********/

/****************
* Mini Notation *
*****************/
// Sequence
//$: sound("bd bd sd hh bd cp sd hh")

// Sample Number
//$: sound("hh:0 hh:1 hh:2 hh:3")

// Rests
//$: sound("metal ~ jazz jazz:1")

// Sub-Sequences
//$: sound("bd wind [ metal jazz ] hh")

// Sub-Sub-Sequences
//$: sound("bs [metal [jazz sd]]")

// Speed Up
//$: sound("bd sd*2 cp*3")

// Parallel
// $: sound("bd*2, hh*2 [hh oh]")

// Slow down
// $: note("[c a f e]/2")

// Alternate
//$: note("c <e g>")

// Elongate
// $: note("c@3 e")

// Replicate
//$: note("c!3 e")

/*********
* SOUNDS *
**********/

// "sound" plays the sound of the given name
//$: sound("bd*2 <sd hh*4>").fast(3)
/* "bank" selects the sound bank */
//   .bank("RolandTR909")

// "n" selects the sample number
//$: n("0 1 4 2").sound("jazz")
/* This would be the same as: */
//$: sound("jazz:0 jazz:1 jazz:4 jazz:2")

/********
* NOTES *
*********/

/* "note" will set the pitch as a number or letter */
//$: note("b g e c")
//  .scale("C:minor")
//  .sound("piano")

//$: s("bd sd")
//$: note("c eb g")

/****************
* AUDIO EFFECTS *
*****************/

/* "lpf" */
//note("[c2 c3]!2").s("sawtooth").lpf("400 200")

/* "vowel" */
//$: note("c3 eb3 g3")
//  .s("sawtooth")
//  .vowel("<a e i o>")

/* gain */
//$: s("hh*16").gain("[.25 1]*4")

/* delay */
//$: s("bd rim bd cp").delay(.5)

/* room */
// $: s("bd rim bd cp").room(.5)

/* pan */
//$: s("bd rim bd cp").pan("0 1")

/* speed */
//$: s("bd rim bd cp").speed("<1 2 -1 -2>")

/* range */
// $: s("hh*32").lpf(saw.range(200,4000))


//setcpm(00)
//$: sound("[bd*2 sd]")
//  .bank("RolandTR909")
//  .lpf("800")
//
//$: note("<a3 c4> c5")
//  .scale("D:dorian")
//  .sound("gm_xylophone")
//  .room(0.4)
//  .delay(0.2)
//
//$: note("[b3*2 a3 c3 c5]/4")
//  .scale("A2:minor")
//  .sound("triangle")
  //.vowel("< <a e> <e i> [e a] [o e] [i a]>")

/*******************/
/* Pattern Effects */
/*******************/

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

// fast: speed it up
// slow: slow down
// rev: reverse
// jux: split left/right modify right
// add: add numbers/notes
// ply: speed up each event n times
// off: copy, shift time & modify
