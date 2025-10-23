const PrimaryButton = ({ label, onclick, type = button}) =>{
    return (
        <button type ={type} onclick={onclick} className = "bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-200" >
            {label}
        </button>
    );
}

export default PrimaryButton;