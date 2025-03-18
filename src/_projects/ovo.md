---
layout: default
image_directory: 'projects/ovo'
page_class: project
position: 3
status: complete
summary:  digital 3D asset created for OVO.
tags: [3d]
title: Ovo
---

<%= render Project::Intro.new(site: @site, resource: @resource) do %>

  Digital 3D asset created for OVO, used in stage visual performances.

<% end %>

<%= render Project::FeatureImage.new(resource: @resource, src: 'feature.png') %>

OVO (October's Very Own) is a Canadian brand founded by rapper Drake, producer Noah "40" Shebib, and Oliver El-Khatib. It encompasses a record label (OVO Sound), a clothing line, and an overall lifestyle brand. Known for its owl logo, OVO represents luxury, exclusivity, and a connection to Toronto's culture.

<%= render Project::Gallery.new(resource: @resource, srcs: %w[1.png 2.png]) %>

<%= render Project::Outro.new(site: @site, resource: @resource) %>