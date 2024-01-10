// Core
import { create } from 'zustand';
// Types
import { useRegisterModalTypes } from '@/types/hooks';

const useRegisterModal = create<useRegisterModalTypes>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useRegisterModal;