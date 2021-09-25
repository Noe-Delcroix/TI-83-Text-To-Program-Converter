var txt
var finalTxt

var boxInput
var boxOutput
var radio
var selection

var wrapped

function setup() {
  createP('Input:').position(0,-12)
  createP('Raw text output:').position(410,-12)
  boxInput = createElement("textarea", "")
  boxInput.position(0, 30)
  boxInput.size(400, 400)
  boxInput.style('background-color', color(220))
  boxOutput = createElement("textarea", "")
  boxOutput.position(410, 30)
  boxOutput.size(400, 400)
  boxOutput.style('background-color', color(220))
  radio=createRadio()
  radio.option("Disp Mode",1)
  radio.option("Graph Mode",2)
  radio.value('1')
  radio.style("width","120px")
  radio.position(0,440)
  sel=createSelect()
  sel.option("NOIR")
  sel.option("BLEU")
  sel.option("ROUGE")
  sel.option("MAGENTA")
  sel.option("VERT")
  sel.option("ORANGE")
  sel.option("MARRON")
  sel.option("BLEU MRN")
  sel.option("BLEU CLR")
  sel.option("JAUNE")
  sel.option("BLANC")
  sel.option("GRIS CLR")
  sel.option("GRIS")
  sel.option("GRIS FON")
  sel.position(140,440)
  sel.hide()
}

function draw() {
  boxInput.position(0, 30)
  boxInput.size(400, 400)
  boxOutput.position(410, 30)
  boxOutput.size(400, 400)
  
  
  txt = boxInput.value()
  finalTxt = ""
  
  
  if (radio.value()==1) {
    sel.hide()
    
    wrapped = txt.replace(/(?![^\n]{1,26}$)([^\n]{1,26})\s/g, '$1\n')
    wrapped = wrapped.split('\n')
    
    finalTxt += 'EffÉcran\n'
    for (let w = 0; w < wrapped.length; w++) {
      if ((w + 1) % 9 == 0 || w == wrapped.length - 1) {
        finalTxt += 'Pause "' + wrapped[w] + '"\n'
      } else {
        finalTxt += 'Disp "' + wrapped[w] + '"\n'
      }

    }

  } else if (radio.value()==2){
    sel.show()
    wrapped = txt.replace(/(?![^\n]{1,35}$)([^\n]{1,35})\s/g, '$1\n')
    wrapped = wrapped.split('\n')
    finalTxt += 'FoncNAff \n'
    finalTxt += 'EffDess\n'
    finalTxt += 'CouleurTexte('+sel.value()+')\n'
    for (let w = 0; w < wrapped.length; w++) {
      finalTxt += 'Texte('+(w%13)*12+',0,"'+wrapped[w]+'")\n'
      if ((w + 1) % 13 == 0 || w==wrapped.length-1) {
        finalTxt += 'Pause :EffDess\n'
      }
    }
    finalTxt += 'FoncAff \n'
  }
  boxOutput.value(finalTxt)

}
