type props = {
  buttonText: string;
  handleFunction: () => void;
}

export const Button = ({ buttonText, handleFunction }: props) => {
  return(
    <button
    className="mt-5 w-[250px] h-[50px] bg-purple-800 text-gray-100 uppercase font-bold hover:bg-purple-900"
    onClick={handleFunction}
    >
      {buttonText}
    </button>
  )
}