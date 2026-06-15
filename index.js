/* ── Mobile menu ──────────────────────────────────── */
const hamMenuBtn         = document.querySelector('.header__main-ham-menu-cont')
const smallMenu          = document.querySelector('.header__sm-menu')
const headerHamMenuBtn   = document.querySelector('.header__main-ham-menu')
const headerHamMenuClose = document.querySelector('.header__main-ham-menu-close')
const headerSmallLinks   = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  const isOpen = smallMenu.classList.toggle('header__sm-menu--active')
  headerHamMenuBtn  .classList.toggle('d-none',  isOpen)
  headerHamMenuClose.classList.toggle('d-none', !isOpen)
})

headerSmallLinks.forEach(link => {
  link.addEventListener('click', () => {
    smallMenu        .classList.remove('header__sm-menu--active')
    headerHamMenuBtn .classList.remove('d-none')
    headerHamMenuClose.classList.add('d-none')
  })
})

/* ── Logo click ───────────────────────────────────── */
document.querySelector('.header__logo-container').addEventListener('click', () => {
  location.href = 'index.html'
})

/* ── Header shadow on scroll ─────────────────────── */
window.addEventListener('scroll', () => {
  document.querySelector('.header').style.boxShadow =
    window.scrollY > 10
      ? '0 2px 20px rgba(0,0,0,0.10)'
      : '0 1px 0 #e2e8f0'
})

/* ── Scroll reveal ────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80)
        revealObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12 }
)

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el))
