import { create } from 'zustand';

interface PollState {
  voted: boolean;
  votedWithContract: boolean;
  setVoted: (voted: boolean) => void;
  setVotedWithContract: (votedWithContract: boolean) => void;
}

export const usePollStore = create<PollState>((set) => ({
  voted: false,
  votedWithContract: false,
  setVoted: (voted: boolean) => set(() => ({ voted })),
  setVotedWithContract: (votedWithContract: boolean) =>
    set(() => ({ votedWithContract })),
}));
