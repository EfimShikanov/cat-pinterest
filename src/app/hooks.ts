import { useCallback, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useOnScreen = ({
  root = null,
  rootMargin = "50px",
  threshold = 0,
} = {}) => {
  const [observer, setObserver] = useState<IntersectionObserver>();
  const [isIntersecting, setIsIntersecting] = useState<Boolean>(false);

  const measureRef = useCallback(
    (node: HTMLDivElement) => {
      if (node) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsIntersecting(entry.isIntersecting);
          },
          { root, rootMargin, threshold }
        );

        observer.observe(node);
        setObserver(observer);
      }
    },
    [root, rootMargin, threshold]
  );

  return { measureRef, isIntersecting, observer };
};
