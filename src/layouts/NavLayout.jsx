import NavHero from "../components/NavHero"

function NavLayout({ title, subtitle, children }) {
  return (
    <>
      <NavHero title={title} subtitle={subtitle}/>
      <div style={{ padding: title==="Blogs" || title==="Complaint"? '0' : "4vw" }}>
        {children}
      </div>
    </>
  )
}

export default NavLayout