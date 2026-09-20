import Image from "next/image";

export function Reveal({ children, className = "" }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

export function Placeholder({ label, dark = false, src, alt = label }) {
  return (
    <div className={`placeholder ${dark ? "placeholder-dark" : ""} ${src ? "has-image" : ""}`}>
      {src ? <Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 50vw" /> : null}
      <span>{src ? label : `[${label}]`}</span>
    </div>
  );
}
