import { createContext } from 'react';
import { StateContext, MessageContext } from '@/types';
export const ModalStateContext = createContext<StateContext>({ state: false, setState: () => {} });
export const ModalMessageContext = createContext<MessageContext>({ message: '', setMessage: () => {} });
