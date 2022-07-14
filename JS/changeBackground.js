export default function changeBackground() {
  const { pathname } = window.location
  const bodyBackground = document.querySelector('body')

  if (pathname === "/universe") {
          bodyBackground.style.background = "url('./images/BG2.png')"
          bodyBackground.style.backgroundSize = "cover"
  } else if (pathname === "/explorer") {
      bodyBackground.style.background = "url('./images/BG3.png')"
      bodyBackground.style.backgroundSize = "cover"
  } else {
      bodyBackground.style.background = "url('./images/BG1.png')"
      bodyBackground.style.backgroundSize = "cover"
      bodyBackground.style.backgroundRepeat = "no-repeat"
  }
}