import Image from "next/image"


export const Cover = ({src}) => {
    return(
        <Image src = {src} alt="Обложка"/>
    )
}

export const Title = ({children}) =>{
    return(
        <span>{children}</span>
    )
}

export const Artst = ({artist}) =>{
    return (
        <p>{artist}</p>
    )
}
export const Duration = ({duration})=>{
    return(
        <span>{duration}</span>
    )
}