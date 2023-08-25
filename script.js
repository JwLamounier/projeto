function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  
  
  
  const img = document.querySelector("#profile img")
  if(html.classList.contains('light')) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Homen de calcasiano com barbixa no queixo, usando oculos com armação preta e lentes transparentes, vestindo camiseta preta em fundo laranja"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Homen de calcasiano com barbixa no queixo, usando oculos com armação preta e lentes escuras, vestindo jaqueta preta em degradê de magenta a ciano da esquerda para a direita"
    )
  }
  
}