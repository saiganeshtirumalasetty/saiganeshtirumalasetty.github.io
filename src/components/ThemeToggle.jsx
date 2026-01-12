import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle(){
  const [dark, setDark] = useState(()=> localStorage.getItem('theme') === 'dark')
  useEffect(()=>{
    const root = document.documentElement
    if(dark){ root.classList.add('dark'); localStorage.setItem('theme','dark') }
    else { root.classList.remove('dark'); localStorage.setItem('theme','light') }
  },[dark])
  return (
    <button aria-label="Toggle theme" onClick={()=>setDark(d=>!d)} className="p-2 rounded-xl border border-border">
      {document.documentElement.classList.contains('dark') ? <Sun size={18}/> : <Moon size={18}/>}
    </button>
  )
}
