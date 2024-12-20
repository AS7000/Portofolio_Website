import './Panel.css';

export default function Panel({panel_ref, children, className }) {
  return <div ref={panel_ref} className={`panel ${className}`}>{children}</div>;
}
