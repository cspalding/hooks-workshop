* what happens when we call some async fetch function within `useEffect`?
  * after doing the async work, need some way to check whether the results are still relevant
  * we can use a `useEffect` cleanup function. We can return a cleanup function from `useEffect`
  * using the cleanup function can help us move away from thinking about mounting and unmounting, which are more event-based
* now we don't have use lifecycle hooks and repeat code as much