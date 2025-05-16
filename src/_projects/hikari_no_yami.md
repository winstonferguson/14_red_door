---
layout: default
image_directory: 'projects/hikari_no_yami'
image_feature: '1.jpeg'
image_feature_position: 'top'
page_class: project
position: 7
status: complete
summary:  3d visuals for a sothebys auction.
tags: [2d]
title: Hikari No Yami
teaser: Crafted and directed a series of posters for a high-fashion brand based in Tokyo and New York
---

<%= render Project::Intro.new(site: @site, resource: @resource) do %>

  art direction & visual design for commercials titled “the setting sun”, with the fashion brand hikari no yami.

<% end %>

<%= render Project::Gallery.new(resource: @resource, srcs: %w[1.jpeg 2.jpeg]) %>
