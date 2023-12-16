# mt-linking

## The purpose of this
Write a description here

## Ideas:
- Use yarn registry (to solve problem with location for mt-mediaplanning-ui and other external packages):
  1. User links webapp and mt-mediaplanning (just running "yarn link" with no extra args in those packages)
  2. We can pull their real path like this:
    readlink ~/.config/yarn/link/@mediatool/mt-mediaplanning-ui
