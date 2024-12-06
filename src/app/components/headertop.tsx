import { RiArrowDownSLine } from "react-icons/ri";

export default function HeaderTop(){
    return(
        <div className="w-[1440px] h-[48px] bg-[#000000] gap-[231px] flex items-center justify-center">
        <div className="text-[#FFFFFF] font-[14px] text-center ">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!<span> ShopNow</span>
        </div>
        <span className="flex items-center gap-2 text-[#FFFFFF] font-[14px]"> English <RiArrowDownSLine color="white" /></span>
        
      </div>
      
    )
}


/*

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
}*/