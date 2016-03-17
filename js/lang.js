function init() {
  // get image
  var image = document.getElementById('image')
  // get sequence
  var seq = pullSequence(900)
  var plot = dotplot.pattern(seq.split(''))
  // set img
  image.src = dotplot.dataUri(plot)
}

function pullSequence(len) {
  // create seq
  var seq = ''
  // return sequence
  for (var i = 0; i < len; i++) {
    // get char id
    var j = Math.floor(Math.random() * 4)
    var char = ''
    // get char
    switch (j) {
      case 0:
        char = 'A'
        break;
      case 1:
        char = 'T'
        break;
      case 2:
        char = 'C'
        break;
      case 3:
        char = 'G'
        break;
    }
    // append
    seq = seq + char
  }
  // return
  return seq
}
