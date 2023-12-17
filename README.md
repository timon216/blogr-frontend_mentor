# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP).

## Link

You can see live demo at https://blogr-fm.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Grid

### What I learned

- usage of named grid lines
  ```css
  .content-grid {
    --padding-inline: 1rem;
    --content-max-width: 80%;
    --middle-gap: 2rem;
    --column-width: calc((var(--content-max-width) / 2) - var(--middle-gap));

    display: grid;
    grid-template-columns: 
      [full-width-start] minmax(var(--padding-inline), 1fr)
      [column-left-start]  min(50% - var(--padding-inline), var(--column-width))
      [column-left-end middle-gap-start] var(--middle-gap)
      [middle-gap-end column-right-start]  min(50% - var(--padding-inline), var(--column-width))
      [column-right-end] minmax(var(--padding-inline), 1fr)
      [full-width-end];
  }
  ```
  Even though setup like that looks complicated at first glance, it makes creating layout much more easier.

- usage of overflow: clip
  ```css
  section {
    overflow-x: clip;
    overflow-y: visible;
  }
  ```
  This solution is way more better than using overflow: hidden on the body element.

- HTML dialog element (with JS methods .show(), .showModal() and .close()) 
  ```css
  <dialog class="nav-item__dialog">
    <ul>
      <li><a href="#">About</a></li>
      <li><a href="#">Team</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Careers</a></li>
    </ul>
  </dialog>
  ```
  
## Continued development

- Instrinsic Web Design - the page looks good with given breakpoint widths but it could be better in between and beyond them.


