

export default function Navbar(){
    return(
        <div className="w-[1,170px] h-[38px] gap-[148px] px-[80px] p-4">
            <h1 className="font-[700] text-[24px]">Exclusive</h1>
            
         <nav className="flex gap-4">
                 <a href="#" className="hover:text-yellow-500">Home</a>
            <a href="#" className="hover:text-yellow-500">Contact</a>
             <a href="#" className="hover:text-yellow-500">About</a>
              <a href="#" className="hover:text-yellow-500">Sign Up</a>
</nav>
        </div>

    )
}