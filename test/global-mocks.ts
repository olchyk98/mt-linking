import { vi } from 'vitest'

vi.mock('node-fzf', () => ({
  default: async () => ({ selected: void 0 }),
}))
