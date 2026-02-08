// grafico
let pct = [70, 90, 100, 80]
let colors = ['--color_blue', '--color_maya-blue', '--color_prussian-blue', '--color_blue']
let bars = document.getElementsByClassName('bar')
let c = 0
const root = document.documentElement
const estiloComputado = getComputedStyle(root)
const corAtual = estiloComputado.getPropertyValue(colors[c])
//root.style.setProperty('--cor-principal', 'blue');
for (bar of bars) {
    bar.style.gridRow = `${11 - (pct[c] / 10)} / -2`
    //bar.style.gridColumn = `${c} / span 1`
    bar.style.backgroundColor = estiloComputado.getPropertyValue(colors[c])
    c++
}
