---
layout: default
title: Projects
page_class: projects
---

<div class="page-width content">
  <% collections.projects.resources.sort_by{ |p| p.data.position }.each do |project| %>
    <a href="<%= project.relative_url %>" class="card <%= project.data.status %>">
      <%= render Project::FeatureImage.new(resource: project, full_width: false) %>
      <h3 class="title"><%= project.data.title %></h3>
      <p class="summary"><%= project.data.teaser %></p>
    </a>
  <% end %>
</div>
