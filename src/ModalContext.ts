import { ReactNode, createContext } from "react";

export const ModalContext = createContext((modal?: ReactNode) => {});
