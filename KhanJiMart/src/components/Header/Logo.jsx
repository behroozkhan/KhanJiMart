import LogoWeb from '../../assets/images/WebLogo.jpg'
const Logo = () => {
  return (
    <div>
      {/* <h1 className="text-[1.500rem]">Exclusive</h1> */}
      <img src={LogoWeb} width={80} height={80} alt="" />
    </div>
  )
}

export default Logo;