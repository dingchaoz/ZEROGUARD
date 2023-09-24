import { create } from 'zustand';

interface polygonIdLoginState {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

export const usePolygonIdLoginStore = create<polygonIdLoginState>((set) => ({
  isLogin: false,
  setIsLogin: (isLogin: boolean) => set(() => ({ isLogin })),
}));
