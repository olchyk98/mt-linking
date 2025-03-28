import { Widgets } from 'blessed'
import { isNil, reduce } from 'ramda'

/**
* -----
* The purpose of this function is
* to simplify layouting for nested
* widgets. The function takes
* a specific input and saturates
* children/nested-children with
* parent properties, returning
* a map with shape: [widgetKey: componentInstance]
*
* Example:
* composeWidgets({
*   key: 'layout',
*   widget: blessed.layout({
*     height: '100%',
*     width: '100%',
*   }),
*   children: [
*     {
*       key: 'myNestedBox'
*       widget: blessed.box({
*         height: '100%',
*         width: '100%',
*       }),
*     },
*   ],
* })
*
* */
export function composeWidgets <const T extends ComposedWidget> (
  shape: T,
  parent?: Widgets.Node,
): ComposedWidgetsTable<T> {
  const table = { [shape.key]: shape.widget } as ComposedWidgetsTable<T>
  if (parent) {
    parent.append(shape.widget)
    shape.widget.parent = parent
  }
  if (isNil(shape.children)) return table
  return reduce(
    (acc, composedWidget) => {
      const nestedTable = composeWidgets(composedWidget, shape.widget)
      return { ...acc, ...nestedTable }
    },
    <ComposedWidgetsTable<T>> table,
    shape.children,
  )
}

export interface ComposedWidget {
  key: string
  widget: Widgets.Node
  children?: ComposedWidget[]
}

export type ComposedWidgetsTable<T extends ComposedWidget | ComposedWidget[]> = (
  T extends ComposedWidget ? Record<T['key'], T['widget']> & (T['children'] extends ComposedWidget[] ? ComposedWidgetsTable<T['children']> : Record<never, unknown>)
    : T extends ComposedWidget[]
      ? MergeObjectsInArray<{ [I in keyof T]: T[I] extends ComposedWidget ? ComposedWidgetsTable<T[I]> : never }>
      : never
)

type MergeObjectsInArray<T> = (
  T extends Record<string, unknown>[]
    ? T extends [infer First, ...infer Rest]
      ? Rest extends Record<string, unknown>[]
        ? First & MergeObjectsInArray<Rest>
        : First & Rest
      : Record<never, unknown>
    : never
)
