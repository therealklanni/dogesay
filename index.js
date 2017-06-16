const utf8 = require(`utf8-stream`)
const map = require(`map-stream`)
const { white, yellow, magenta, blue, cyan, green, red } = require(`chalk`)

const [y, w, Y, W, B, M, R, C, G] = [
  yellow,
  white,
  yellow.bold,
  white.bold,
  blue.bold,
  magenta.bold,
  red.bold,
  cyan.bold,
  green.bold
]

const dogesay = (buf, cb) => {
  const ln = i => buf.split(`\n`)[i] || ``
  const doge = y(
    `
                Y.                      _
                YiL                   .\`\`\`.
                Yii;                .; .;;\`.
                YY;ii._           .;\`.;;;; :
                iiYYYYYYiiiii;;;;i\` ;;::;;;;               ${M(ln(0))}
            _.;YYYYYYiiiiiiYYYii  .;;.   ;;;                                        ${B(ln(1))}
         .YY${Y(`YYY`)}YYYYYiiYYYYYYYYYYYYii;\`  ;;;;
       .YYY${Y(`YYYY$$`)}YYiiYY$$${Y(`$$iiiY`)}YYYYY;.ii;\`..     ${C(ln(2))}
      :YYY$?  \`TYiiYY${Y(`$$$$$YYYYYYY`)}iiYYYYiYYii.                        ${R(ln(3))}
      Y$MM$:   :YYYYYY$!"\`\`"4${Y(`YYYYY`)}iiiYYYYiiYY.                                   ${W(
      ln(4)
    )}
   \`.Y:MM$$b.,dYY$$Yii" :'   :${Y(`YYYY`) + `llYiiYYYi`.replace(/Y+/g, p => w(p))}YYY   ${G(ln(5))}
_.._Y:\`4MM$!YYYYYYYYYii,.__.diii$$${w(`YYYYYYYYYYYY`)};${`                                ${B(
      ln(6)
    )}
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
`
      .replace(/Y+/g, p => w(p))
      .replace(/\$+/g, p => Y(p))}`
  )

  cb(null, doge)
}

if (process.stdin.isTTY) {
  const input = process.argv.slice(2).join(`\n`) || "\n\nohai\n\n\nwow\nno input\n\n\n\n\n\namaze"
  return dogesay(input, (err, output) => console.log(output))
}

process.stdin
  .pipe(utf8())
  .pipe(map((buf, cb) => cb(null, buf.toString())))
  .pipe(map(dogesay))
  .pipe(process.stdout)
