import { createContext } from 'react';
import { StateContext, MessageContext } from '@/types';
export const ModalStateContext = createContext<StateContext>('');
export const ModalMessageContext = createContext<MessageContext>('');
