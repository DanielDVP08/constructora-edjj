import { create } from 'zustand'

interface ModalStore {
  isOpen: boolean
  selectedItem: number | null
  items: { title: string; images: { src: string; alt: string }[] }[]
  onOpen: (index: number) => void
  onClose: () => void
  setItems: (items: { title: string; images: { src: string; alt: string }[] }[]) => void
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  selectedItem: null,
  items: [],
  onOpen: (index) => set({ isOpen: true, selectedItem: index }),
  onClose: () => set({ isOpen: false, selectedItem: null }),
  setItems: (items) => set({ items }),
}))

