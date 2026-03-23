export default function SidebarToggleButton({
  isOpen,
  onClick,
  className = "",
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label={isOpen ? "Collapse series panel" : "Expand series panel"}
    >
      {isOpen ? "X" : "="}
    </button>
  );
}
