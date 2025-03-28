export interface UIComponentTrait<T> {
  render(): T
  destroy?: () => void
}
