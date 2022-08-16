export default function MenuButton({isOpen , setIsOpen}) {
    
  return (
    <div onClick={()=>setIsOpen(!isOpen)} className={isOpen ? "menu-btn open" : "menu-btn"}>
        <div className="menu-btn-icon"></div>
    </div>
  )
}
