import { usePopUpContext } from "../../provider-and-context/PopUpContext";
import ErrorModal from "../error-modal/ErrorModal";
import SuccessModal from "../error-modal/success-modal/SuccessModal";

export default function Modals() {
    const { error, successMessage } = usePopUpContext()


    return (
        <>
         {error && <ErrorModal message={error} />}
      {successMessage && <SuccessModal message={successMessage} />}
        </>
    )
}