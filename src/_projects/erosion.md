---
layout: default
image_directory: 'projects/erosion'
page_class: project erosion
position: 2
status: complete
summary:  an animation, showcasing the erosion shoe by jamesjfrys and Zellerfeld.
tags: [3d, spatial]
title: Erosion
---

<%= render Project::Intro.new(site: @site, resource: @resource) do %>

  An eroding animation, showcasing the erosion shoe design by jamesjfrys and made by Zellerfeld.

<% end %>


<%= render Project::FeatureVideo.new(resource: @resource, src: 'erosion.mp4') %>

Zellerfeld is a leader in 3D-printed footwear, blending innovation with sustainability. Their cutting-edge technology creates custom, high-performance shoes that offer both style and comfort, while reducing environmental impact.

<%= render Project::Gallery.new(resource: @resource, srcs: %w[Frame17.png Frame18.png Frame19.png]) %>

<%= render Project::Outro.new(site: @site, resource: @resource) %>



