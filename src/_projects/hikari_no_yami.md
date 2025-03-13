---
layout: default
image_directory: 'projects/hikari_no_yami'
page_class: project
position: 4
status: complete
summary:  3d visuals for a sothebys auction.
tags: [2d]
title: Hikari No Yami
---

<%= render Project::Intro.new(site: @site, resource: @resource) do %>

  art direction & visual design for commercials titled “the setting sun”, with the fashion brand hikari no yami.

<% end %>

<%= render Project::Gallery.new(resource: @resource, srcs: %w[1.jpeg 2.jpeg]) %>
