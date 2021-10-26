TASK :1

- When we do a default install of all the packages we are unable to import even if we give absolute path for @tmo/shared/models
- Exceptions were not handled for the get ReadingList API (fixed)
- Exceptions were not handled for the addToReadingList API  (fixed)
- Exceptions were not handled for theremoveFromReadingList API  (fixed)
- Missing types in multiple places.
- Don't use symbols for folder names (_+_state)
- Always use proper variable names. (book-search.component.html, reading-list.component.html)

Lighthouse issues:

Buttons do not have an accessible name  ;  (fixed)
Background and foreground colors do not have a sufficient contrast ratio.  ;  (fixed)

Manual Accesibility fixed issues:
- Add accesibility for book card in book-search.component.html
- Add accesibility for "Want to Read" button.
- Add accesibility for close button in My Reading List Drawer
