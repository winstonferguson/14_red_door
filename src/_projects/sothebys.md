---
layout: default
image_directory: 'projects/sothebys'
image_feature: 'feature.png'
page_class: project
position: 0
status: complete
summary:  3d visuals for a sothebys auction.
tags: [3d]
title: Sotheby's
teaser: Hyper-realistic 3D visuals of a yet-to-exist grill, securing auction placement 
---

<%= render Project::Intro.new(site: @site, resource: @resource) do %>

  Jewellery visualisation & 3D sculpting for a Sotheby’s upcoming auction with a private jeweller.

<% end %>

<%= render Project::FeatureImage.new(resource: @resource) %>

<%= render Project::Gallery.new(resource: @resource, srcs: %w[1.png 2.png]) %>
