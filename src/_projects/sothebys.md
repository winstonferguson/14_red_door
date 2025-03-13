---
layout: default
image_directory: 'projects/sothebys'
page_class: project
position: 5
status: complete
summary:  3d visuals for a sothebys auction.
tags: [3d]
title: Sothebys
---

<%= render Project::Intro.new(site: @site, resource: @resource) do %>

  Jewellery visualisation & 3D sculpting for a Sotheby’s upcoming auction with a private jeweller.

<% end %>

<%= render Project::FeatureImage.new(resource: @resource, src: 'feature.png') %>

<%= render Project::Gallery.new(resource: @resource, srcs: %w[1.png 2.png]) %>
