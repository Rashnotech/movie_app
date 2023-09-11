import '../../dist/index.css'
import Logo from '../assets/Logo.png'
export default function Header(){
    return (
        <header className="px-8 flex flex-row justify-around items-center">
            <img src={Logo} alt="MovieBox" />
            <div>
                <form>
                    <input type="search"
                        placeholder='What do you want to watch?'
                        name="" id=""
                    />
                </form>
            </div>
            <div className="rounded-full w-9 h-9 bg-pink-800">
                <a href="#">Sign in</a>
                <div className=''>
                    <span></span>
                    <span></span>
                </div>
            </div>
            
        </header>
    )
}