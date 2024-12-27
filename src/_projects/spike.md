---
layout: default
image_directory: 'projects/spike'
page_class: project
position: 1
summary:  an architectural concept for the ban of nuclear weaponry.
tags: [3d, spatial, architecture, 3d rendering, installation, worldbuilding]
title: Spike
---

<%= render Project::Intro.new(site: @site, resource: @resource) do %>

  This monument design advocates for the global ban on nuclear warfare.

<% end %>

<%= render Project::FeatureImage.new(resource: @resource, src: 'feature.png') %>

Visitors ascend a stairway, culminating in a blinding beam of light; a reminder of the stark realities and moral weight of nuclear arms.

<%= render Project::Gallery.new(resource: @resource, srcs: %w[1.jpeg 2.png]) %>

<%= render Project::Outro.new(site: @site, resource: @resource) do %>

  Set within a desolate, rocky landscape, the monument’s striking form transforms the climb into a powerful, reflective journey, urging peace and accountability while emphasising the urgency of disarmament.

<% end %>



