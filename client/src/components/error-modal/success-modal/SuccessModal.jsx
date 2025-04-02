import './successModal.css';

export default function SuccessModal({ message }) {
  return (
    <div className="success-modal">
      <p>{message}</p>
    </div>
  );
}
