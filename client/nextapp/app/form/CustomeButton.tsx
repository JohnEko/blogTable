interface CustomeButtonProps{
    label: string;
    className?: string
    onClick: () => void;

}
// The question mark means not required
const CustomButton: React.FC<CustomeButtonProps> =({
    label,
    className,
    onClick
})=> {

    return(
         
        <div 
        onClick={onClick}
        className= {`${className}`}>
           {label}

        </div>
    )
}
export default CustomButton