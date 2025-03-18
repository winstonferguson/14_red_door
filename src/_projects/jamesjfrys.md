---
layout: default
image_directory: 'projects/jamesjfrys'
page_class: project
position: 6
status: complete
summary:  Subtractive branding & visuals for the artist jamesjfrys.
tags: [2d]
title: jamesjfrys
---

<%= render Project::Intro.new(site: @site, resource: @resource) do %>

  Subtractive branding & visuals for the artist jamesjfrys.

<% end %>

<%= render Project::FeatureVideo.new(resource: @resource, src: 'jamesjfrys.mp4') %>

<%= render Project::Gallery.new(resource: @resource, srcs: %w[1.jpeg 2.jpeg]) %>



