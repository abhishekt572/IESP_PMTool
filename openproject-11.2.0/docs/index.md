---
sidebar_navigation:
  title: OpenProject Documentation
  priority: 999
description: Help and documentation for OpenProject Community Edition, Enterprise on-premises and Enterprise cloud.
robots: index, follow
keywords: help, documentation
---
<link rel="stylesheet" href="/style.css">
<style>
h1 {
    font-size: 30px;
    font-weight: 500;
    border-bottom: 2px solid #707070;
    padding-bottom: 10px;
    margin-top: 20px;
    margin-bottom: 10px
}
table {
     width: 100%;
     border-collapse: collapse;
     overflow-x: auto;
     margin: 15px auto;
     word-wrap: break-word;
     clear: both
}
 table thead {
     background: #f2f2f2
}
 table tbody {
     border-top: 3px solid #dfdfdf
}
 table tbody:first-child {
     border-top: 0
}
 table tbody tr>td {
     max-width: 100%;
     min-width: 100px
}
 table tbody code {
     word-wrap: break-word
}
 table td,table th {
     text-align: left;
     padding: 7px 10px;
     border: 1px solid #dfdfdf;
     font-size: 15px
}
 html {
     font-family: sans-serif;
     line-height: 1.15;
     -webkit-text-size-adjust: 100%;
     -webkit-tap-highlight-color: rgba(51,51,51,0)
}
 hr {
     box-sizing: content-box;
     height: 0;
     overflow: visible
}
 h1,h2,h3,h4,h5,h6 {
     margin-top: 0;
     margin-bottom: .5rem
}
 article,aside,figcaption,figure,footer,header,hgroup,main,nav,section {
     display: block
}
 body {
     font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
     font-size: 1rem;
     font-weight: 400;
     line-height: 1.5;
     text-align: left;
     background-color: #f9f9f9;
     width: 90%;
     margin: auto
}
 code,code span {
     font-family: Menlo,DejaVu Sans Mono,Liberation Mono,Consolas,Ubuntu Mono,Courier New,andale mono,lucida console,monospace
}
 li code,p code,table code {
     color: #5f8341;
     background-color: rgba(95,131,65,.1)
}
 a>code {
     color: #1b69b6
}
 hr {
     border: 0;
     border-top: 1px solid #dfdfdf;
     width: 100%
}
 h2,h3,h4,h5,h6 {
     border-bottom: 1px solid #ccc;
     line-height: 1.4;
     padding-bottom: 5px
}
 h2 code,h3 code,h4 code,h5 code,h6 code {
     color: #5f8341;
     background-color: rgba(95,131,65,.1)
}
img {
	width: 60%;
	height: auto;
	margin-left: 25%;
}
</style>
# OpenProject Documentation

<div class="alert alert-info" role="alert">
**Note**: To better read our OpenProject Documentation, please go to [docs.openproject.org](https://docs.openproject.org).
</div>

ToDo: check all links.

## Installation

Get started with installing and upgrading OpenProject using [our Installation Guide starting point](https://docs.openproject.org/installation-and-operations/).

The guides for [manual](./installation/manual/README.md), [packaged](./installation/packaged/) and [Docker-based](./installation/docker/README.md) installations are provided.

## Upgrading

The detailed upgrade instructions for our packaged installer are located on the [official website](https://www.openproject.org/download/upgrade-guides/).

The guides for [manual](./operations/upgrading/manual/upgrading.md), [packaged](./operations/upgrading/packaged/upgrading.md) and [Docker-based](./operations/upgrading/docker/upgrading.md) upgrading are provided.

## Operation

* Backup guides for [manual](./operations/backup/manual/backup.md), [packaged](./operations/backup/packaged/backup.md) and [Docker-based](./operations/backup/docker/backup.md) installations
* [Alter configuration of OpenProject](./configuration/configuration.md)
* [Manual repository integration for Git and Subversion](./repositories/README.md)
* [Configure incoming mails](./configuration/incoming-emails.md)
* [Install custom plugins](./plugins/plugins.md)


## User Guides

Please see our [User Guide pages](https://docs.openproject.org/user-guide/) for detailed documentation on the functionality of OpenProject.


## Development

* [Quick Start for developers](./development/quick-start.md)
* [Full development environment for developers on Ubuntu](./development/development-environment-ubuntu.md) and [Mac OS X](./development/development-environment-osx.md)
* [Developing plugins](./development/create-openproject-plugin.md)
* [Developing OmniAuth Plugins](./development/create-omniauth-plugin.md)
* [Running tests](./development/running-tests.md)
* [Code review guidelines](./development/code-review-guidelines.md)
* [API documentation](./api/README.md)


## APIv3 documentation sources

The documentation for APIv3 is written in the [API Blueprint Format](http://apiblueprint.org/) and its sources are being built from the entry point `apiv3-documentation.apib`.

You can use [aglio](https://github.com/danielgtaylor/aglio) to generate HTML documentation, e.g. using the following command:

```bash
aglio -i apiv3-documentation.apib -o api.html
```

The output of the API documentation at `dev` branch is continuously built and pushed to Github Pages at [opf.github.io/apiv3-doc/](opf.github.io/apiv3-doc/).