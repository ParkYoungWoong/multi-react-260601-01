import { create } from 'zustand'
import { combine } from 'zustand/middleware' // 상태의 타입 추론

export const useCountStore = create(
  combine(
    {
      count: 0,
      double: 0,
      min: 0,
      max: 9999
    },
    (set, get) => {
      return {
        increase: function () {
          const { count } = get()
          const newCount = count + 1
          set({
            count: newCount,
            double: newCount * 2
          })
        }
      }
    }
  )
)
