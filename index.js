'use strict'

import utf8 from 'utf8-stream'
import map from 'map-stream'
import { white, yellow, magenta, blue, cyan, green, red } from 'chalk'

let y = yellow
let w = white
let Y = yellow.bold
let W = white.bold
let B = blue.bold
let M = magenta.bold
let C = cyan.bold
let G = green.bold
let R = red.bold

process.stdin
  .pipe(utf8())
  .pipe(map((buf, cb) => cb(null, buf.toString())))
  .pipe(map((buf, cb) => {
    let ln = (i) => buf.split('\n')[i] || ''
    let doge = y(`
                Y.                      _
                YiL                   .\`\`\`.
                Yii;                .; .;;\`.
                YY;ii._           .;\`.;;;; :
                iiYYYYYYiiiii;;;;i\` ;;::;;;;               ${M(ln(0))}
            _.;YYYYYYiiiiiiYYYii  .;;.   ;;;                                        ${B(ln(1))}
         .YY${Y('YYY')}YYYYYiiYYYYYYYYYYYYii;\`  ;;;;
       .YYY${Y('YYYY$$')}YYiiYY$$${Y('$$iiiY')}YYYYY;.ii;\`..     ${C(ln(2))}
      :YYY$?  \`TYiiYY${Y('$$$$$YYYYYYY')}iiYYYYiYYii.                        ${R(ln(3))}
      Y$MM$:   :YYYYYY$!"\`\`"4${Y('YYYYY')}iiiYYYYiiYY.                                   ${W(ln(4))}
   \`.Y:MM$$b.,dYY$$Yii" :'   :${Y('YYYY')+'llYiiYYYi'.replace(/Y+/g, (p) => w(p))}YYY   ${G(ln(5))}
_.._Y:\`4MM$!YYYYYYYYYii,.__.diii$$${w('YYYYYYYYYYYY')};`+`                                ${B(ln(6))}
.,._Y$b\`P\`     "4$$$$$iiiiiiii$$$$YY$$$$$$$YiY;              ${W(ln(7))}
   \`,Y\`$:       :$$$$$$$$$YYYYY$$$$$$$$$YYiiYYL                          ${Y(ln(8))}
    "Y;$$.    .;PPb$\`.,.\`\`T$$YY$$$$YYYYYYiiiYYU:      ${G(ln(9))}
    ;$P$;;: ;;;;i$y$"!Y$$$b;$$$Y$YY$$YYYiiiYYiYY              ${B(ln(10))}
    $Fi$$ .. \`\`:iii.\`-":YYYYY$$YY$$$$$YYYiiYiYYY                                     ${M(ln(11))}
    :Y$$rb \`\`\`\`  \`_..;;i;YYY$YY$$$$$$$YYYYYYYiYY:                 ${C(ln(12))}
     :$$$$$i;;iiiiidYYYYYYYYYY$$$$$$YYYYYYYiiYYYY.      ${R(ln(13))}
      \`$$$$$$$YYYYYYYYYYYYY$$$$$$YYYYYYYYiiiYYYYYY               ${Y(ln(14))}
      .i!$$$$$$YYYYYYYYY$$$$$$YYY$$YYiiiiiiYYYYYYY                              ${W(ln(15))}
     :YYiii$$$$$$$YYYYYYY$$$$YY$$$$YYiiiiiYYYYYYi'
`.replace(/Y+/g, (p) => w(p)).replace(/\$+/g, (p) => Y(p)))

    cb(null, doge)
  }))
  .pipe(process.stdout)
