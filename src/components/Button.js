import "../styles/Button.css";

function Button({ onClick, type, children, className, style }) {
  return (
    <button
      style={style}
      className={`btn-default ${className ? className : ""}`}
      onClick={onClick}
      type={type}
    >
      <span>{children}</span>
      <i></i>
    </button>
  );
}

export default Button;
