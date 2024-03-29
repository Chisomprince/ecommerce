export default function Button({text,w,img='false',bg,handleClick,id}){
    return(
        
           
            <button className={`flex ${w} ${bg} px-4 py-2 rounded shadow-lg `}  onClick={()=>handleClick(id)}>
            {img == 'false' ? null : <img className='w-5' src={img}/> }  
                <p className='mx-auto font-semibold text-center text-white'>{text}</p>
                 {/* <div className='p-3 bg-white rounded shadow-lg'>
                <img className='w-5'  src='./phone.svg'/>
            </div> */}
            </button>
        
    )
}