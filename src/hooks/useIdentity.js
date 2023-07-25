// hooks/useIdentity.js
import { useRef } from "react";

let counter = 0;

export default function useIdentity(name) {
  const idRef = useRef(null);
  if (!idRef.current) {
    idRef.current = `${name}_${counter++}`;
  }
  return idRef.current;
}
