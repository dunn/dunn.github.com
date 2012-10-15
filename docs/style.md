# More a set of guidelines than actual rules

The point of these recommendations is to promote consistency and
usability across <http://calsjp.org>.

## Navigation

The navigation bar should allow visitors to access every major section
of the website.  But there should not be *too many* links on the
navigation bar&mdash;that will just confuse people.  In addition, too much
stuff in the header will make it hard to use the site on mobile
devices.  In the picture below, if another item or two was added to
the navigation bar, no actual content would be visible unless the user
scrolls down:

![http://calsjp.org on the iPhone](https://raw.github.com/grumble/grumble.github.com/master/img/sjp-iphone.png)

## News Roundup and attribution

When posting news items that originate elsewhere, make sure you
*clearly* attribute the source.  **Do not** post the entire news item.
By copying the entire article or post, SJP reaps the benefits of the
content (readers, web traffic) without repaying the original author.
The source and author of the piece might be listed, but **whenever a
site uses content from an external source, the site should give
readers a reason to go to the source.** By doing so, the site
acknowledges the creator of the content and rewards them.

"News Updates", then, should never include more than two or three
paragraphs of content from any one external source (and less if the
external source is a very short piece).  Include the external content
as a blockquote, followed or preceded by [a link to the source](http://books.google.com/books?id=rTYJAAAAQAAJ&ots=_PrywRRkIJ&dq=emma&pg=PA1#v=onepage&q&f=false):

> Emma Woodhouse, handsome, clever, and rich, with a comfortable home
> and happy disposition, seemed to unite some of the best blessings of
> existence; and had lived nearly twenty-one years in the world with
> very little to distress or vex her.

## Pages and posts

**Posts** make up the majority of the site.  Posts include
  time-sensitive content such as club announcements, news alerts,
  action items, and campus events (including meeting reminders).
  **Pages** should be reserved for content, like Key Issues, that are
  meant to be continually relevant.

### Child pages

Some pages&mdash;right now, just "Key Issues"&mdash;have child pages
("General Background", "Apartheid", etc.).  This heirarchical
structure is **not** reflected in the navigation menu (there is no
drop-down list that displays the child pages), so **make sure that
every page with children has links to those child pages.**

To add a link to a child page (or to any page or post), you'll need
the page ID.  This can be found by editing the page in WordPress.
Below the title of the page or post there will be a line of text:

> **Permalink**: `http://calsjp.org/?page_id=15`

"15" is the ID of the page (I'm using "General Background" as an
example).  Wherever you want to link to this page ("General
Background"), add a link to `?page_id=15` (you don't need to include
`http://calsjp.org/`).

### Little things

Don't change the color of text.  Color and other styling is handled by
the blog software.

Integrate hyperlinks into the body of your post.  Instead of doing
this,

> See here for more information and photos: http://lightbox.time.com/2012/10/11/paul-ryan-all-pumped-up-for-his-closeup/?iid=lb-gal-viewagn#1

do this:

> [TIME has information about Paul Ryan's fitness regimen, and cheesecake](http://lightbox.time.com/2012/10/11/paul-ryan-all-pumped-up-for-his-closeup/?iid=lb-gal-viewagn#1)

Lastly:

- Don't use all caps, especially in post titles.

- Use short, clear titles for posts

- Italicize titles of books and films; e.g, *Though I Know the River
  is Dry*
  
- Enclose titles of essay and articles in quotes; e.g, "California
  State Assembly Seeks to Stifle Debate on Israel"

- If you use headers in posts or pages, use "Header 2" (`<h2>`) and
below.  Header 1 (`<h1>`) is reserved for the post/page title.
