// grafico
var pct = [90, 100, 80, 100]
let colors = ['--color_blue', '--color_maya-blue']
var bars = document.getElementsByClassName('bar')
const root = document.documentElement
const estiloComputado = getComputedStyle(root)
//const corAtual = estiloComputado.getPropertyValue(colors[c])
//root.style.setProperty('--cor-principal', 'blue');
for (let i in bars) {
    bars[i].style.gridRow = `${11 - (pct[i] / 10)} / -2`
    //bars[i].style.gridColumn = `${i} / span 1`
    let impapar = 0
    if (i % 2 == 0) {
        impapar = 1
    }
    bars[i].style.backgroundImage = `linear-gradient(to bottom, ${estiloComputado.getPropertyValue(colors[0 + impapar])}, ${estiloComputado.getPropertyValue(colors[1 - impapar])})`
}
