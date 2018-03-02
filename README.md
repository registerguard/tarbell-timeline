This is a Tarbell project to create a two-part timeline. The default display breaks up the timeline into buckets. In this example, we have several projects created over multiple years that are collected by year. You could also collect by topic or any string value. The second display is just an unstyled list of all entries. The user can toggle back and forth using a link that calls a toggle JavaScript function.

This is very rudimentary and the code could be cleaned up and made more sophisticated. My hope is that we can take this, deploy to S3 and embed in any CMS using pym.js. I haven't gone through those steps yet, but seems very doable.

This code relies *heavily* on [tiny slider](https://github.com/ganlanyuan/tiny-slider), a vanilla JS, touch-friendly slider script. I take no credit for the nice handling it provides.

The custom styles included are specific to the RG's Bulldog theme but could easily be modified for whatever you prefer.

Depending on your date structure, you may want to [format](http://strftime.org/) the dates differently or just pull in strings. Right now I'm not using AP style, which should be addressed in the future.