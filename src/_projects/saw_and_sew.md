---
layout: default
link: https://sawandsew.com
page_class: project
image_directory: 'projects/saw_and_sew'
position: 0
summary: Founded in 2018, Saw & Sew creates bespoke furniture, blending artistry, technology, and local materials to redefine design.
tags: [3d, web, spatial, brand identity, design, development, branding, creative direction, ui/ux]
title: Saw & Sew
---

<%= render Project::Intro.new(site: @site, resource: @resource) do %>

  Founded in London in 2018, Saw & Sew has embarked on a pioneering journey to create modern bespoke furniture and decor. They embrace creativity and driving innovation to lead the way. 
  
  Their innovative approach blends artistry with advanced technology, using locally sourced materials and production.

<% end %>

<%= render Project::FeatureImage.new(resource: @resource, src: 'feature.png') %>

We created visuals that embody the ethos of empowering the user by showcasing furniture in its purest form.

<%= render Project::Gallery.new(resource: @resource, srcs: %w[1.png 2.png 3.png]) %>

<%= render Project::Outro.new(site: @site, resource: @resource) do %>

  The all-white designs symbolise a blank canvas, inviting personalisation and transformation to align with individual visions. Set against a natural rocky environment, these renders juxtapose raw, unaltered surroundings with the potential of the furniture, reinforcing the idea of user-led creation.

  This approach emphasises that each piece is not merely a finished product but a starting point for unique expression.

<% end %>



