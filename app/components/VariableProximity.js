"use client";

import { useRef, useEffect } from "react";

function parseFVS(settings) {
  const result = {};
  const re = /'(\w{4})'\s+([\d.]+)/g;
  let m;
  while ((m = re.exec(settings)) !== null) {
    result[m[1]] = parseFloat(m[2]);
  }
  return result;
}

function buildFVS(axes) {
  return Object.entries(axes)
    .map(([k, v]) => `'${k}' ${v.toFixed(2)}`)
    .join(", ");
}

export default function VariableProximity({
  label,
  fromFontVariationSettings = "'wght' 400",
  toFontVariationSettings = "'wght' 900",
  radius = 120,
  falloff = "gaussian",
  className,
  style,
}) {
  const charsRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef(null);

  useEffect(() => {
    const fromAxes = parseFVS(fromFontVariationSettings);
    const toAxes = parseFVS(toFontVariationSettings);

    function getT(distance) {
      const clamped = Math.max(0, Math.min(distance, radius));
      if (falloff === "exponential") return Math.pow(1 - clamped / radius, 2);
      if (falloff === "gaussian")
        return Math.exp(-Math.pow(clamped / (radius * 0.42), 2));
      return 1 - clamped / radius;
    }

    function update() {
      const { x, y } = mouseRef.current;
      charsRef.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const t = getT(Math.hypot(x - cx, y - cy));
        const axes = {};
        for (const axis in fromAxes) {
          axes[axis] = fromAxes[axis] + t * (toAxes[axis] - fromAxes[axis]);
        }
        el.style.fontVariationSettings = buildFVS(axes);
      });
      rafRef.current = requestAnimationFrame(update);
    }

    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(update);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [fromFontVariationSettings, toFontVariationSettings, radius, falloff]);

  return (
    <span
      className={className}
      style={{ ...style, cursor: "default", userSelect: "none" }}
      aria-label={label}
    >
      {label.split("").map((char, i) => (
        <span
          key={i}
          ref={(el) => (charsRef.current[i] = el)}
          aria-hidden="true"
          style={{
            display: "inline-block",
            fontVariationSettings: fromFontVariationSettings,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
