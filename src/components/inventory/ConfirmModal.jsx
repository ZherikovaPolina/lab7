export default function ConfirmModal({ onConfirm, onCancel }) {
  return (
    <div
      onClick={onCancel} 
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000 
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()} 
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        <p>Ви впевнені?</p>
        <button onClick={onConfirm}>Так</button>
        <button onClick={onCancel}>Ні</button>
      </div>
    </div>
  );
}