import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const sections = ['home','about','education','skills','experience','projects','certs','contact']

export default function Nav(){
  useEffect(()=>{
    const links = document.querySelectorAll('[data-spy]')
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        const id = e.target.getAttribute('id')
        const link = document.querySelector(`a[href="#${id}"]`)
        if(e.isIntersecting){
          links.forEach(l=>l.classList.remove('text-accent'))
          link?.classList.add('text-accent')
        }
      })
    }, { rootMargin: '-40% 0px -55% 0px' })
    sections.forEach(id=>{
      const el = document.getElementById(id)
      el && io.observe(el)
    })
    return ()=> io.disconnect()
  },[])

  return (
    <nav className="sticky top-0 z-50 border-b border-border backdrop-blur">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="font-extrabold">SG</Link>
        <div className="flex items-center gap-5">
          {sections.map(s=> (
            <a key={s} data-spy href={`#${s}`} className="hover:opacity-80 capitalize hidden md:inline-block">{s}</a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
