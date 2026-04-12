export default function ConfirmModal({ onConfirm, onCancel }) {
  return (
    <div>
      <p>Ви впевнені?</p>
      <button onClick={onConfirm}>Так</button>
      <button onClick={onCancel}>Ні</button>
    </div>
  );
}