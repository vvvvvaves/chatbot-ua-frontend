import "./Button.css";
import { FaRegPaperPlane, FaStop } from "react-icons/fa";
import { useState } from "react";

interface Props {
  className: string;
  iconTrue: React.ReactNode;
  iconFalse: React.ReactNode;
}

function Button({ className, iconTrue, iconFalse }: Props) {

    const [buttonState, setButtonState] = useState(false)

    const handleClick = () => {
        setButtonState(!buttonState)
    }

  return (
    <div className={className}>
    <div className="button-container" onClick={handleClick}>
      {buttonState ? iconFalse : iconTrue}
    </div>
    </div>
  );
}

export default Button;
