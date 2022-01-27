# Open Graph (OG) image Generator

When the image is combined with title and description metadata, they provide quick information about the resource shared. For instance, when we share a link on Twitter, the metadata is parsed and a preview card generates.

On a quick glance, the preview card provides information about the resource shared even before visiting the link. Now, if no metadata is available, no preview generates, and the link gets truncated, leaving no useful information about the resource.

However, creating OG images for many pages or blogs is time-consuming. A better approach would be to have a few templates designed for respective categories and dynamically create the images with a simple image generator service.

In this project, i set up a simple server with the /ogimage endpoint that responds with dynamically generated images from provided query parameters. The primary objective is to reduce the manual effort when creating OG images.

# What is Open Graph?

Let’s first understand what the OG protocol is. According to [opg.me](https://ogp.me/), “The Open Graph protocol enables any web page to become a rich object in a social graph. It provides enough information to richly represent any web page within the social graph.”

Individual pieces of information that are socially shareable are defined via meta tags. These tags are then grouped by the OG mechanism to provide a preview of the shared resource on social media.

In this project, i focused more on og:image to learn more about the other meta tags (such as og:title or og:description) and the Open Graph protocol itself, [please refer to this insightful article](https://blog.logrocket.com/open-graph-sharable-social-media-previews/).

Below are the steps required to build a Node.js powered OG image generator:

- Setting up the ogimage endpoint
- Creating an image template
- Generating an image with Puppeteer
- Saving and serving the image as a response

# ACKNOWLEDGEMENT

- [Sai Krishna](https://blog.logrocket.com/create-open-graph-image-generator-node-js/)
