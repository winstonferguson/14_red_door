---
layout: default
page_class: project chess
image_directory: 'projects/chess'
position: 7
status: complete
summary: a 1 of 1 sculptural chess set exploring subtraction and timelessness with artist jamesjfrys. 
tags: [3d, spatial]
title: Chess
---

<%= render Project::Intro.new(site: @site, resource: @resource) do %>

  a 1 of 1 sculptural chess set exploring subtraction and timelessness with artist jamesjfrys. 

<% end %>

<%= render Project::FeatureImage.new(resource: @resource, src: 'feature.jpeg') %>

Crafted in-house at 14 red door with the artist, this chess set redesigns the game through subtraction.  

<%= render Project::Gallery.new(resource: @resource, srcs: %w[1.jpeg 2.jpeg 3.jpeg]) %>


