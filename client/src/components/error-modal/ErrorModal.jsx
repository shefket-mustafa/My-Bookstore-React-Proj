import './errorModal.css';

export default function ErrorModal({ message }) {
  return (
    <div className="error-modal">
      <p>{message}</p>
    </div>
  );
}
